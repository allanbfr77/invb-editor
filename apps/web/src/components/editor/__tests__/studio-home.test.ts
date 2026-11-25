import { describe, expect, test } from "bun:test";
import { studioHomeHref } from "../studio-home";

describe("studioHomeHref", () => {
	test("dentro do INVB Studio, leva à tela inicial do studio", () => {
		expect(studioHomeHref("/editor-avancado")).toBe("/app");
	});

	test("fora do studio (bun dev), não há para onde voltar", () => {
		expect(studioHomeHref("")).toBeNull();
	});
});
