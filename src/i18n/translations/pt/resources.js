import providenceCenter from '../../../images/resources-logos/the_providence_center_icon.svg';
import gatewayHealth from '../../../images/resources-logos/lifespan_logo.png';
import bvchcHealthStation from '../../../images/resources-logos/bvchc_health_station.jpg';
import bvchcHealthExpress from '../../../images/resources-logos/bvchc_express_care.jpg';
import careNewEnglandFamily from '../../../images/resources-logos/care_new_england_entrance.jpg';
import boysTown from '../../../images/resources-logos/boys_town_logo.svg';
import crossRoads from '../../../images/resources-logos/crossroads_logo.svg';
import autismProject from '../../../images/resources-logos/the_autism_project_logo.svg';
import healthAndHospice from '../../../images/resources-logos/nursing_placement_logo.jpg';
import pawtucketYmca from '../../../images/resources-logos/pawtucket_ymca_logo.png';
import ywcaUsa from '../../../images/resources-logos/ywca_logo.png';
import ripin from '../../../images/resources-logos/ripin_logo.png';
import bhLink from '../../../images/resources-logos/bh_link_logo.png';
import bavcLogo from '../../../images/resources-logos/bvac_logo.svg';
import jenksLogo from '../../../images/resources-logos/jenks_park_pediatrics_logo.jpg';

export default {
  'family-care': {
    title: 'Family Care',
    list: {
      'Assistência Médica Comunitária do Vale de Blackstone : Estação de saúde do bairro': {
        abbreviation: 'BVCHC: Estação de saúde do bairro',
        website: 'www.bvchc.org',
        image: bvchcHealthStation,
        rounded: true,
        addresses: [
          {
            street: '1000 Broad Street',
            city: 'Central Falls, RI, 02863',
            phone: '(401) 722-0081',
          },
        ],
        description:
        'A Estação de Saúde de Bairro de Vae de Blackstone desenvolveu uma equipa de profissionais de saúde que, juntos, cuidam de todos que vivem em Central Falls.',
      },
      'Assistência Médica Comunitária do Vale de Blackstone: Cuidados Medicos Expresso': {
        abbreviation: 'BVCHC: Cuidados Medicos Expresso',
        website: 'www.bvchc.org/services/express-health-care',
        image: bvchcHealthExpress,
        rounded: true,
        addresses: [
          {
            name: 'Localização de Pawtucket',
            street: '39 East Avenue',
            city: 'Pawtucket, RI, 02860',
            phone: '(401) 722-0081',
          },
          {
            name: 'Localização de Central Falls',
            street: '1000 Broad Street',
            city: 'Central Falls, RI, 02863',
            phone: '(401) 722-0081',
          },
        ],
        hours: [
          {
            name: 'Horário de funcionamento no local de Pawtucket (sem marcação):',
            options: ['Saturday from 8am–4:30pm'],
          },
          {
            name: 'Horário de funcionamento no local Central Falls (Sem marcação):',
            options: [
              'Segunda-feira a Quinta-feira das 8h às 20h',
              'Sexta-feira 8:00 - 17:00',
              'Sábado, das 8h às 16h30 (fechado aos Domingos)',
            ],
          },
        ],
      },
      'Jenks Park Pediatrics': {
        image: jenksLogo,
        rounded: true,
        addresses: [
          {
            street: '577 Broad Street',
            city: 'Central Falls, RI 02863',
            phone: '(401) 305-1950',
          },
        ],
        description:
        'Serving children, adolescents, and young adults in the Central Falls area; providing excellent medical care in Spanish and English that is convenient, comfortable, and low cost. {br}{br}Dr. Nelken has 18 years’ experience serving the Latin communities of RI, including 4 years in Central Falls.',
      },
      'Grupo de Assistência Médica de Nova Inglaterra: Centro de Assistência à Família': {
        website: 'mhri.org/family-care-center',
        image: careNewEnglandFamily,
        rounded: true,
        addresses: [
          {
            street: '111 Brewster Street',
            city: 'Pawtucket, RI 02860',
          },
        ],
        hours: [
          {
            name: 'Agende uma consulta com um médico de cuidados primários:',
            options: [
              'Equipe A: (401) 729-2304',
              'Equipe B: (401) 729-2206',
              'Equipe C: (401) 729-2769',
            ],
          },
        ],
        description:
        'Comprometida em fornecer os melhores cuidados de saúde possíveis para bebês, crianças, adolescentes, mulheres grávidas e adultos de todas as idades.',
      },

    },
  },
  'additional-resources': {
    title: 'Additional Resources',
    list: {
      'O Centro de Providence': {
        website: 'providencecenter.org',
        image: providenceCenter,
        addresses: [
          {
            name: 'Serviços Ambulatoriais para Adultos',
            street: '530 North Main Street',
            city: 'Providence, RI 02904',
            phone: '(401) 528-0110',
          },
          {
            name: 'Serviços para Crianças e Famílias',
            street: '520 Hope Street',
            city: 'Providence, RI 02906',
            phone: '(401) 276-4155',
          },
        ],
        description:
        'O Centro de  Providence ajuda adultos, adolescentes e crianças afetadas por doenças psiquiátricas, problemas emocionais e vícios, fornecendo tratamento e serviços de apoio em um ambiente comunitário.',
      },
      'Portal de Assistência Médica': {
        website: 'gatewayhealth.org',
        image: gatewayHealth,
        addresses: [
          {
            name: 'Escritórios administrativos da Gateway Healthcare',
            street: '249 Roosevelt Avenue, Suite 205',
            city: 'Pawtucket, RI 02860',
            phone: '(401) 724-8400',
          },
        ],
        description:
        'O Portal de Assistência Médica fornece excelentes serviços de tratamento, intervenção e prevenção a adultos e crianças de todas as origens culturais e econômicas com problemas comportamentais e de abuso de substâncias, por meio de seus programas residenciais, ambulatoriais e comunitários. Com vários locais em todo o estado, o Portal de Assistência Médica  presta serviços a mais de 25.000 habitantes de Rhode Island todos os anos.',
      },
      'Cidade de Rapazes de Nova Inglaterra': {
        website: 'boystown.org',
        image: boysTown,
        addresses: [
          {
            name: 'Escritório de Providence',
            street: '294 West Exchange St.',
            city: 'Providence, RI 02903',
            phone: '(401) 214-4960',
          },
        ],
        description:
        'Desde a abertura em 1991, a Cidade de Rapazes de Nova Inglaterra oferece cuidados de mudança de vida para dezenas de milhares de crianças e famílias em Rhode Island e estados vizinhos.',
      },
      'Encruzilhadas Rhode Island': {
        website: 'crossroadsri.org',
        image: crossRoads,
        addresses: [
          {
            street: '160 Broad Street',
            city: 'Providence, RI 02903',
            phone: '(401) 521-2255',
          },
        ],
        description:
        'Encruzilhadas Rhode Island atende a algumas das pessoas mais vulneráveis em Rhode Island desde 1894 e é a principal organização de serviços para moradores de rua do estado.',
      },
      'O Projeto Autismo': {
        website: 'theautismproject.org',
        image: autismProject,
        addresses: [
          {
            street: '1516 Atwood Avenue',
            city: 'Johnston, RI 02919',
            phone: '(401) 785-2666',
          },
        ],
        description:
        'O Projeto Autismo fornece suporte, treinamento e programação de qualidade acessíveis a todos, para crianças e adultos com Transtorno do Espectro do Autismo (TEA), suas famílias e aqueles que trabalham com eles.',
      },
      'Assistência Médica Domiciliar e Cuidados Paliativos de Colocação de Enfermagem': {
        website: 'nursingplacement.com',
        image: healthAndHospice,
        addresses: [
          {
            name: 'Escritório Corporativo',
            street: '334 East Avenue',
            city: 'Pawtucket, RI 02860',
            phone: '(401) 728-6500',
          },
        ],
        description:
        'Assistência Médica Domiciliar e Cuidados Paliativos de Colocação de Enfermagem  está comprometida em fornecer assistência médica domiciliar de qualidade e econômica a todos os membros da comunidade de Rhode Island, sem levar em consideração o status social, origem nacional, raça, cor, idade, sexo, preferência sexual, deficiência, ou crença política.',
      },
      'YMCA - Secção Famíliar de Pawtucket': {
        website: 'ymcapawtucket.org',
        image: pawtucketYmca,
        addresses: [
          {
            street: '20 Summer Street',
            city: 'Pawtucket, RI 02860',
            phone: '(401) 727-7900',
          },
        ],
        description:
        'YMCA - Secção Famíliar de Pawtucket é um centro para estilos de vida equilibrados, oferecendo a pessoas de todas as idades oportunidades para se tornarem fisicamente  preparados  ​​e saudáveis ​​por meio de atividades físicas e baseadas no conhecimento a um preço acessível.',
      },
      'YWCA USA': {
        website: 'ywca.org',
        image: ywcaUsa,
        addresses: [
          {
            name: 'Rhode Island',
            street: '514 Blackstone Street',
            city: 'Woonsocket, RI 02895',
            phone: '(401) 769-7450',
          },
          {
            name: 'Sul de Massachusetts',
            street: '20 S 6th Street',
            city: 'New Bedford, MA 02740',
            phone: '(508) 999-3255',
          },
        ],
        description:
        'A YWCA se dedica a eliminar o racismo, empoderar as mulheres e promover a paz, a justiça, a liberdade e a dignidade para todos. Eles são uma das maiores e mais antigas organizações de mulheres do país, atendendo a mais de 2 milhões de mulheres, meninas e suas famílias.',
      },
      'Rede de Informações aos Pais de Rhode Island': {
        website: 'ripin.org',
        image: ripin,
        addresses: [
          {
            street: '300 Jefferson Boulevard, Suite 300',
            city: 'Warwick, RI 02888',
            phone: '(401) 270-0101',
          },
        ],
        description:
        'A missão do RIPIN é ajudar indivíduos, pais, famílias e crianças a alcançar seus objetivos de saúde, educação e bem-estar socioeconômico, fornecendo informações, treinamento, educação, apoio e advocacia para os cuidados e sistemas centrados na pessoa / família. mudança.',
      },
      'BH Link': {
        website: 'bhlink.org',
        image: bhLink,
        addresses: [
          {
            street: '975 Waterman Avenue',
            city: 'East Providence, RI 02914',
            phone: '(401) 414-LINK (5465)',
          },
        ],
        description:
        'A missão da BH Link é garantir que todos os Rhode Islanders 18+ com crises de saúde mental e uso de substâncias recebam os serviços adequados de que precisam o mais rápido possível em um ambiente que apóie sua recuperação.',
      },
      'Centro de Advocacia do Vale Blackstone': {
        website: 'bvadvocacycenter.org',
        image: bavcLogo,
        addresses: [
          {
            street: 'PO Box 5643',
            city: 'Pawtucket, RI 02862',
            phone: '(401) 723-3057',
          },
        ],
        description:
        'O Centro de Advocacia do Vale Blackstone é uma organização sem fins lucrativos que presta serviços abrangentes às vítimas de violência doméstica, além de educação e conscientização sobre a questão da violência doméstica há mais de três décadas.',
      },

    },
  },

};
