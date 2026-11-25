import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { BASE_PATH } from "@/utils/base-path";
import { cn } from "@/utils/ui";

/** Tela inicial do INVB Studio quando o editor roda dentro dele (Editor avançado); null no `bun dev`. */
export function studioHomeHref(base: string = BASE_PATH): string | null {
	return base ? "/app" : null;
}

/**
 * Botão fixo no cabeçalho para voltar ao INVB Studio. É um <a> comum, não `next/link`: o destino fica fora do
 * basePath do editor e o `next/link` poria /editor-avancado na frente.
 */
export function StudioHomeButton({ className }: { className?: string }) {
	const href = studioHomeHref();
	if (!href) return null;
	return (
		<a
			href={href}
			title="Voltar para a tela inicial do INVB Studio"
			className={cn(
				"text-muted-foreground hover:text-foreground hover:bg-accent flex h-8 items-center gap-1.5 rounded-sm px-2 text-sm whitespace-nowrap",
				className,
			)}
		>
			<HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
			INVB Studio
		</a>
	);
}
