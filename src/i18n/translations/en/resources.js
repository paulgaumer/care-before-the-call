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
  title: 'Resources',
  list: {
    'The Providence Center': {
      website: 'providencecenter.org',
      image: providenceCenter,
      addresses: [
        {
          name: 'Adult outpatient services',
          street: '530 North Main Street',
          city: 'Providence, RI 02904',
          phone: '(401) 528-0110',
        },
        {
          name: 'Child and family services',
          street: '520 Hope Street',
          city: 'Providence, RI 02906',
          phone: '(401) 276-4155',
        },
      ],
      description:
        'The Providence Center helps adults, adolescents and children affected by psychiatric illnesses, emotional problems and addictions by providing treatment and supportive services within a community setting.',
    },
    'Gateway Healthcare': {
      website: 'gatewayhealth.org',
      image: gatewayHealth,
      addresses: [
        {
          name: 'Gateway Healthcare Administrative Offices',
          street: '249 Roosevelt Avenue, Suite 205',
          city: 'Pawtucket, RI 02860',
          phone: '(401) 724-8400',
        },
      ],
      description:
        'Gateway Healthcare provides outstanding treatment, intervention and prevention services to adults and children of all cultural and economic backgrounds with behavioral and substance abuse issues, through its residential, outpatient and community-based programs. With numerous locations across the state, Gateway Healthcare delivers services to more than 25,000 Rhode Islanders each year.',
    },
    'Blackstone Valley Community Health Care: Neighborhood Health Station': {
      website: 'bvchc.org',
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
        'The Blackstone Valley Neighborhood Health Station has developed a team of health care workers who together care for everyone who lives in Central Falls.',
    },
    'Blackstone Valley Community Health Care: Express Health Care': {
      website: 'bvchc.org/services/express-health-care',
      image: bvchcHealthExpress,
      rounded: true,
      addresses: [
        {
          name: 'Pawtucket location',
          street: '39 East Avenue',
          city: 'Pawtucket, RI, 02860',
          phone: '(401) 722-0081',
        },
        {
          name: 'Central Falls Location',
          street: '1000 Broad Street',
          city: 'Central Falls, RI, 02863',
          phone: '(401) 722-0081',
        },
      ],
      hours: [
        {
          name: 'Hours of operation at Pawtucket location (walk-in):',
          options: ['Saturday from 8am–4:30pm'],
        },
        {
          name: 'Hours of operation at Central falls location (walk-in)',
          options: [
            'Monday–Thursday from 8am–8pm',
            'Friday 8am–5pm',
            'Saturday 8am–4:30pm (closed Sundays)',
          ],
        },
      ],
    },
    'Care New England Medical Group: Family Care Center': {
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
          name: 'Schedule an appointment with a primary care physician:',
          options: ['Team A: (401) 729-2304', 'Team B: (401) 729-2206', 'Team C. (401) 729-2769'],
        },
      ],
      description:
        'Committed to providing the best health care possible for infants, children, adolescents, pregnant women, and adults of all ages.',
    },
    'Boys Town New England': {
      website: 'boystown.org',
      image: boysTown,
      addresses: [
        {
          name: 'Providence office',
          street: '294 West Exchange St.',
          city: 'Providence, RI 02903',
          phone: '(401) 214-4960',
        },
      ],
      description:
        'Since opening in 1991, Boys Town New England has brought life-changing care to tens of thousands of children and families in Rhode Island and surrounding states.',
    },
    'Crossroads Rhode Island': {
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
        'Crossroads Rhode Island has been serving some of the most vulnerable people in Rhode Island since 1894, and are the leading homeless services organization in the state.',
    },
    'The Autism Project': {
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
        'The Autism Project provides quality support, training, and programming that is accessible to all for children and adults with Autism Spectrum Disorder (ASD), their families, and those who work with them.',
    },
    'Home Health and Hospice Care of Nursing Placement': {
      website: 'nursingplacement.com',
      image: healthAndHospice,
      addresses: [
        {
          name: 'Corporate office',
          street: '334 East Avenue',
          city: 'Pawtucket, RI 02860',
          phone: '(401) 728-6500',
        },
      ],
      description:
        'Home Health & Hospice Care of Nursing Placement is committed to providing quality, cost-effective home health care to all members of the Rhode Island community without regard to social status, national origin, race, color, age, gender, sexual preference, handicap, or political belief.',
    },
    'Pawtucket Family Branch YMCA': {
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
        'The Pawtucket Family YMCA is a hub for well-rounded lifestyles, offering people of all ages opportunities to become fit and healthy through physical and knowledge-based activities at an affordable price.',
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
          name: 'Southern Massachusetts',
          street: '20 S 6th Street',
          city: 'New Bedford, MA 02740',
          phone: '(508) 999-3255',
        },
      ],
      description:
        'YWCA is dedicated to eliminating racism, empowering women and promoting peace, justice, freedom and dignity for all. They are one of the oldest and largest women’s organizations in the nation, serving over 2 million women, girls, and their families.',
    },
    'Rhode Island Parent Information Network': {
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
        'RIPIN’s mission is to assist individuals, parents, families, and children to achieve their goals for health, education, and socio-economic well-being by providing information, training, education, support, and advocacy for person/family-centered care and system change.',
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
        'BH Link’s mission is to ensure all Rhode Islanders 18+ experiencing mental health and substance use crises receive the appropriate services they need as quickly as possible in an environment that supports their recovery.',
    },
    'Blackstone Valley Advocacy Center': {
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
        'The Blackstone Valley Advocacy Center is a nonprofit organization providing comprehensive services to victims of domestic violence as well as education and awareness on the issue of domestic violence for over three decades.',
    },
  },
};
