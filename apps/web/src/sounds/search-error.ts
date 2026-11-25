/** Mensagem para mostrar quando a busca de sons falha: a que o servidor mandou ou uma genérica com o código. */
export async function soundsErrorMessage(response: Response): Promise<string> {
	try {
		const body = (await response.json()) as { error?: unknown };
		if (typeof body?.error === "string" && body.error) return body.error;
	} catch {
		// corpo que não é JSON
	}
	return `Falha na busca de sons (${response.status})`;
}
