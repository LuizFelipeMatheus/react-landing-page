export interface Funcionalidades {
  id: number;
  title: string;
  description: string;
  icon: string;
}   

export const funcionalidades: Funcionalidades[] = [
  {
    id: 1,
    icon:"📊",
    title: "Relatórios Detalhados",
    description: "Visualize o crescimento de cada turma com gráficos interativos e exportação simplificada de dados."
  },
{
    id: 2,
    icon:"🎯",
    title: "Metas de Aprendizado",
    description: "Defina competências específicas por curso e acompanhe a proficiência técnica de cada estudante"
},
{
    id: 3,
    icon:"🔔",
    title: "Alertas Inteligentes",
    description: "Seja notificado automaticamente sobre quedas de rendimento ou faltas consecutivas."
},
{
    id: 4,
    icon:"🤝",
    title: "Gestão de Parcerias",
    description: "Conecte alunos a estágios e empresas parceiras diretamente pela plataforma."
},
{
    id: 5,
    icon:"📱",
    title: "App do Aluno",
    description: "Acesso rápido a notas, horários e materiais didáticos através de uma experiência mobile nativa."
},
{
    id: 6,
    icon:"🔐",
    title: "LGPD Compliance",
    description: "Gestão de dados em total conformidade com as leis de proteção de dados brasileiras."
}
]
