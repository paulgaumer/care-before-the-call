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

export default {
  title: 'Recursos',
  list: {
    'El Centro de Providence': {
      website: 'providencecenter.org',
      image: providenceCenter,
      addresses: [
        {
          name: 'Servicios Ambulatorios para Adultos',
          street: '530 North Main Street',
          city: 'Providence, RI 02904',
          phone: '(401) 528-0110',
        },
        {
          name: 'Servicios para Niños y Familias',
          street: '520 Hope Street',
          city: 'Providence, RI 02906',
          phone: '(401) 276-4155',
        },
      ],
      description:
        'El Centro de Providence ayuda a adultos, adolescentes y niños afectados por enfermedades psiquiátricas, problemas emocionales y adicciones al proporcionar tratamiento y servicios de apoyo dentro de un entorno comunitario.',
    },
    'Portal de Asistencia Médica': {
      website: 'gatewayhealth.org',
      image: gatewayHealth,
      addresses: [
        {
          name: 'Oficinas Administrativas de Gateway Healthcare',
          street: '249 Roosevelt Avenue, Suite 205',
          city: 'Pawtucket, RI 02860',
          phone: '(401) 724-8400',
        },
      ],
      description:
        'El Portal de Asistencia Médica  se ofrece excelentes servicios de tratamiento, intervención y prevención a adultos y niños de todos los orígenes culturales y económicos con problemas de comportamiento y abuso de sustancias, a través de sus programas residenciales, ambulatorios y comunitarios. Con numerosas ubicaciones en todo el estado, el Portal de Asistencia Médica- Gateway Healthcare- ofrece servicios a más de 25,000 habitantes de Rhode Island cada año.',
    },
    'Cuidados Médicos de la Comunidad del Valle Blackstone: Estación de Salud Vecinal': {
      abbreviation: 'BVCHC: Estación de Salud Vecinal',
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
        'La Estación de Salud Vecinal del Valle Blackstone ha desarrollado un equipo de trabajadores de la salud que cuidan juntos a todos los que viven en Central Falls.',
    },
    'Cuidados Médicos de la Comunidad del Valle Blackstone: Asistencia Médica Urgente': {
      abbreviation: 'BVCHC: Asistencia Médica Urgente',
      website: 'www.bvchc.org/services/express-health-care',
      image: bvchcHealthExpress,
      rounded: true,
      addresses: [
        {
          name: 'Ubicación de Pawtucket',
          street: '39 East Avenue',
          city: 'Pawtucket, RI, 02860',
          phone: '(401) 722-0081',
        },
        {
          name: 'Ubicación de Central Falls',
          street: '1000 Broad Street',
          city: 'Central Falls, RI, 02863',
          phone: '(401) 722-0081',
        },
      ],
      hours: [
        {
          name: 'Horario de atención en la ubicación de Pawtucket (sin cita previa):',
          options: ['Sábado de 8 a.m. a 4:30 p.m.'],
        },
        {
          name: 'Horario de atención en la ubicación de Central Falls (sin cita):',
          options: [
            'Lunes a Jueves de 8 a.m. a 8 p.m.',
            'Viernes 8 am-5pm',
            'Sábado 8 am-4:30pm (Domingos cerrados)',
          ],
        },
      ],
    },
    'Grupo Médico de Asistencia de Salud de Nueva Inglaterra Centro de Cuidado Familiar': {
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
          name: 'Programe una cita con un médico de atención primaria:',
          options: [
            'Equipo A: (401) 729-2304',
            'Equipo B: (401) 729-2206',
            'Equipo C: (401) 729-2769',
          ],
        },
      ],
      description:
        'Comprometidos a proporcionar la mejor atención médica posible para bebés, niños, adolescentes, mujeres embarazadas y adultos de todas las edades.',
    },
    'Pueblo de Chicos de Nueva Inglaterra': {
      website: 'boystown.org',
      image: boysTown,
      addresses: [
        {
          name: 'Oficina de Providence',
          street: '294 West Exchange St.',
          city: 'Providence, RI 02903',
          phone: '(401) 214-4960',
        },
      ],
      description:
        'Desde su apertura en 1991, Pueblo de Chicos de Nueva Inglaterra, ha brindado cuidados que cambian la vida de decenas de miles de niños y familias en Rhode Island y los estados circundantes.',
    },
    'Encrucijada Rhode Island': {
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
        'Encrucijada Rhode Island ha estado sirviendo a algunas de las personas más vulnerables en Rhode Island desde 1894, y es la organización líder de servicios para personas sin hogar en el estado.',
    },
    'El proyecto de Autismo': {
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
        'El Proyecto Autismo brinda apoyo de calidad, capacitación y programación accesible para todos los niños y adultos con trastorno del espectro autista (TEA), sus familias y aquellos que trabajan con ellos.',
    },
    'Atención Médica Domiciliaria y de Hospicio para la colocación de Enfermería': {
      website: 'nursingplacement.com',
      image: healthAndHospice,
      addresses: [
        {
          name: 'Oficina corporativa',
          street: '334 East Avenue',
          city: 'Pawtucket, RI 02860',
          phone: '(401) 728-6500',
        },
      ],
      description:
        'Atención médica domiciliaria y de hospicio para la colocación de enfermería se compromete a proporcionar atención de salud en el hogar de calidad y rentable a todos los miembros de la comunidad de Rhode Island sin tener en cuenta el estado social, el origen nacional, la raza, el color, la edad, el género, la preferencia sexual, la discapacidad, o creencia política.',
    },
    'YMCA  Sección Familiar de Pawtucket': {
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
        'La YMCA Sección Familiar de Pawtucket, es un centro para estilos de vida completos, que ofrece a las personas de todas las edades oportunidades para ponerse en forma y saludable a través de actividades físicas y basadas en el conocimiento a un precio asequible.',
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
          name: 'Sur de Massachusetts',
          street: '20 S 6th Street',
          city: 'New Bedford, MA 02740',
          phone: '(508) 999-3255',
        },
      ],
      description:
        'YWCA se dedica a eliminar el racismo, empoderar a las mujeres y promover la paz, la justicia, la libertad y la dignidad para todos. Son una de las organizaciones de mujeres más grandes y antiguas de la nación, que atiende a más de 2 millones de mujeres, niñas y sus familias.',
    },
    'Red de información para padres de Rhode Island': {
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
        'La misión de RIPIN es ayudar a las personas, los padres, las familias y los niños a alcanzar sus objetivos de salud, educación y bienestar socioeconómico, proporcionando información, capacitación, educación, apoyo y defensa de la atención y el cambio de sistema centrado en la persona / familia.',
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
        'La misión de BH Link es garantizar que todas las personas mayores de 18 años que padecen crisis de salud mental y uso de sustancias reciban los servicios apropiados que necesitan lo más rápido posible en un entorno que respalde su recuperación.',
    },
    'Centro de Abogacía del Valle Blackstone': {
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
        'El Centro de Abogacía del Valle de Blackstone es una organización sin fines de lucro que brinda servicios integrales a las víctimas de violencia doméstica, así como educación y concientización sobre el tema de la violencia doméstica durante más de tres décadas.',
    },
  },
};
