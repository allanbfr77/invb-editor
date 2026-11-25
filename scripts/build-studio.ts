// Gera o editor como arquivos estáticos e copia para o INVB Studio (public/editor-avancado).
// Uso: bun run build:studio [caminho-do-invb-studio]   (padrão: ../invb-studio, ou INVB_STUDIO_DIR)
import { cpSync, existsSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dir, "..");
const WEB = join(ROOT, "apps", "web");
const studioDir = resolve(
	process.argv[2] ?? process.env.INVB_STUDIO_DIR ?? join(ROOT, "..", "invb-studio"),
);

if (!existsSync(join(studioDir, "server.js"))) {
	console.error(
		`Não achei o INVB Studio em ${studioDir} (falta o server.js).\n` +
			"Passe o caminho: bun run build:studio C:\\caminho\\do\\invb-studio",
	);
	process.exit(1);
}

const run = (cmd: string[], cwd: string, env: Record<string, string> = {}) => {
	const r = Bun.spawnSync(cmd, {
		cwd,
		env: { ...process.env, ...env },
		stdout: "inherit",
		stderr: "inherit",
	});
	if (r.exitCode !== 0) {
		console.error(`Falhou: ${cmd.join(" ")}`);
		process.exit(r.exitCode ?? 1);
	}
};

const outDir = join(WEB, "out");
rmSync(outDir, { recursive: true, force: true });
run(["bun", "run", "build"], WEB, { INVB_STUDIO_EXPORT: "1" });
if (!existsSync(join(outDir, "index.html"))) {
	console.error("A exportação não gerou apps/web/out/index.html.");
	process.exit(1);
}

const dest = join(studioDir, "public", "editor-avancado");
rmSync(dest, { recursive: true, force: true });
cpSync(outDir, dest, { recursive: true });

const commit =
	Bun.spawnSync(["git", "rev-parse", "--short", "HEAD"], { cwd: ROOT }).stdout.toString().trim() ||
	"desconhecido";
writeFileSync(
	join(dest, "LEIAME.txt"),
	"Arquivos gerados pelo invb-editor (bun run build:studio). Não edite à mão.\n" +
		`Commit: ${commit}\n` +
		`Gerado em: ${new Date().toISOString()}\n`,
);
console.log(`Editor avançado copiado para ${dest} (commit ${commit}).`);
