import { describe, expect, test } from "bun:test";
import { baseMetaData } from "../metadata";

describe("aba do navegador", () => {
	test("o título é do Editor avançado, não do OpenCut", () => {
		expect(baseMetaData.title).toBe("Editor avançado · INVB Studio");
	});

	test("o ícone é o da Nova Vida", () => {
		const icons = baseMetaData.icons as { icon: { url: string }[] };
		expect(icons.icon.map((i) => i.url)).toEqual(["/icons/invb.png"]);
	});
});
