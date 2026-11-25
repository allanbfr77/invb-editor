import { describe, expect, test } from "bun:test";
import { editorHref } from "../editor-href";

describe("editorHref", () => {
	test("leva ao editor com o id na busca", () => {
		expect(editorHref("abc")).toBe("/editor?id=abc");
	});

	test("codifica caracteres especiais do id", () => {
		expect(editorHref("a b")).toBe("/editor?id=a%20b");
	});
});
