/** Endereço do editor de um projeto. O id vai na busca (não no caminho) para funcionar na exportação estática. */
export function editorHref(projectId: string): string {
	return `/editor?id=${encodeURIComponent(projectId)}`;
}
