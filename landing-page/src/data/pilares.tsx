import iconFoco from "../assets/iconsSobre/iconFoco.png";
import iconDados from "../assets/iconsSobre/iconDados.png";
import iconIntegracao from "../assets/iconsSobre/iconIntegracao.png";
import iconSeguranca from "../assets/iconsSobre/iconSeguranca.png";


export interface Pilar {
    id: number;
    icon: string;
    title: string;
    description: string;
}

export const pilares: Pilar[] = [
    {
        id: 1,
        icon: iconFoco,
        title: "Foco Técnico",
        description: "Módulos específicos para laboratórios e oficinas."
    },
    {
        id: 2,
        icon: iconDados,
        title: "Dados Acionáveis",
        description: "Dashboards que mostram o desempenho individual."
    },
    {
        id: 3,
        icon: iconIntegracao,
        title: "Integração Total",
        description: "Comunicação fluida entre coordenação e alunos."
    },
    {
        id: 4,
        icon: iconSeguranca,
        title: "Segurança Robusta",
        description: "Dados protegidos com criptografia de ponta."
    }
]