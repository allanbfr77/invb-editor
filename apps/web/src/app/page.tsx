"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// A raiz leva à lista de projetos. Feito no navegador porque a exportação estática não tem redirect de servidor.
export default function Home() {
	const router = useRouter();
	useEffect(() => {
		router.replace("/projects");
	}, [router]);
	return null;
}
