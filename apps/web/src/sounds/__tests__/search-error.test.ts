import { describe, expect, test } from "bun:test";
import { soundsErrorMessage } from "../search-error";

describe("soundsErrorMessage", () => {
	test("usa a mensagem que o servidor mandou", async () => {
		const res = new Response(
			JSON.stringify({ error: "Busca de sons não configurada" }),
			{ status: 503 },
		);
		expect(await soundsErrorMessage(res)).toBe("Busca de sons não configurada");
	});

	test("sem mensagem no corpo, diz que a busca falhou e o código", async () => {
		const res = new Response("<html>", { status: 500 });
		expect(await soundsErrorMessage(res)).toBe("Falha na busca de sons (500)");
	});
});
