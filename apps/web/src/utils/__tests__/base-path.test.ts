import { describe, expect, test } from "bun:test";
import { withBasePath } from "../base-path";

describe("withBasePath", () => {
	test("sem prefixo, devolve o caminho como está", () => {
		expect(withBasePath("/fonts/a.json", "")).toBe("/fonts/a.json");
	});

	test("com o prefixo do editor, põe /editor-avancado na frente", () => {
		expect(withBasePath("/fonts/a.json", "/editor-avancado")).toBe(
			"/editor-avancado/fonts/a.json",
		);
	});

	test("não mexe em endereço completo, data: ou blob:", () => {
		for (const url of [
			"https://cdn.exemplo.com/x.png",
			"data:image/png;base64,AAAA",
			"blob:http://localhost/123",
		]) {
			expect(withBasePath(url, "/editor-avancado")).toBe(url);
		}
	});

	test("sem prefixo informado, usa NEXT_PUBLIC_BASE_PATH (vazio no bun dev)", () => {
		expect(withBasePath("/flags")).toBe("/flags");
	});
});
