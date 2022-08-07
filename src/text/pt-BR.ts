import {
    navData,
    homeData,
    aboutData,
    skillsData,
    projectsData,
    contactData,
} from './texts'

export function switchLanguage() {
    navData.home = 'INÍCIO'
    navData.about = 'SOBRE'
    navData.projects = 'PROJETOS'
    navData.contact = 'CONTATO'

    homeData.welcome = 'Bem-vindo ao meu mundo misterioso...'
    homeData.button = 'Desbrave'

    aboutData.textOne =
        'Atualmente estudante de Análise e Desenvolvimento de Sistemas no IFPI, tive meu primeiro contato com programação no primeiro ano do ensino médio técnico em Programação para Jogos Digitais (2019), onde tive uma breve introdução a Python e Java no decorrer do curso.'

    aboutData.textTwo =
        'Em meados de 2021, me interessei mais ainda pela programação por motivação de um grande amigo e comecei meus estudos em Desenvolvimento Web por conta própria, com HTML, CSS e Javascript.'

    aboutData.textThree =
        'Hoje sou um desenvolvedor Front End com o objetivo de ser Fullstack. Apaixonado pelo design e interatividade que a internet proporciona, aprecio códigos limpos, semânticos e legíveis e possuo muita fome de aprendizado.'

    skillsData.title = 'MINHAS HABILIDADES'

    projectsData.title = 'Aqui estão alguns dos meus projetos recentes'

    contactData.title = 'Sinta-se livre para entrar em contato comigo'
}
