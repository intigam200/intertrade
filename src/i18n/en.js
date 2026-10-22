// English version of the site. Anchors (slug, id) are shared with the Russian
// version so that switching language keeps the position on the page.
export default {
  meta: {
    title: 'Intertrade and Consulting Group — Integrated Equipment Supply & Global Project Logistics',
    description:
      'Certified equipment, technical auditing and end-to-end heavy-haul logistics for Oil & Gas and Mining enterprises worldwide.',
  },

  pages: {
    home: {
      title: 'Intertrade and Consulting Group — Integrated Equipment Supply & Global Project Logistics',
      description:
        'Certified equipment, technical auditing and end-to-end heavy-haul logistics for Oil & Gas and Mining enterprises worldwide.',
    },
    about: {
      title: 'About — Intertrade and Consulting Group',
      description:
        'Supplier of certified equipment for Oil & Gas and Mining enterprises: engineering audit, quality assurance and project logistics.',
    },
    services: {
      title: 'Capabilities: specification audit, quality assurance, logistics — Intertrade and Consulting Group',
      description:
        'Engineering & specification audit, flow control and instrumentation, mining wear solutions, 3-stage quality assurance, strategic equivalents and project logistics.',
    },
    products: {
      title: 'Equipment & Compliance Matrix — Intertrade and Consulting Group',
      description:
        'Equipment and compliance matrix: API 6D valves, API 610 pumps, ATEX/IECEx instrumentation, mining wear parts and project logistics.',
    },
    contacts: {
      title: 'Contacts — Intertrade and Consulting Group',
      description:
        'Submit your datasheets, specifications or RFP by phone, e-mail or the request form. Intertrade and Consulting Group LLP.',
    },
  },

  data: {
    contacts: {
      legalName: 'Intertrade and Consulting Group LLP',
      country: 'Republic of Kazakhstan',
    },

    mission:
      'We ensure uninterrupted supply of shut-off and control valves, instrumentation and process equipment to industrial sites, with strict adherence to project specifications and contractual deadlines.',

    positioning:
      'We power energy, mining, and industrial infrastructure with certified equipment, technical auditing, and end-to-end heavy-haul logistics. Ensuring continuous operations and zero downtime for severe-service assets across remote global locations.',

    industries: ['Oil & Gas enterprises', 'Mining enterprises', 'Energy and industrial infrastructure'],

    activities: [
      {
        index: '01',
        icon: 'gauge',
        slug: 'engineering-audit',
        title: 'Engineering & Specification Audit',
        short: 'We audit your datasheets and requisitions before order placement.',
        full:
          'We do more than supply hardware. Our technical team audits your Data Sheets and Material Requisitions to verify pressure ratings, medium compatibility, connection specs and duty cycles — eliminating design discrepancies and site mismatches before order placement.',
        items: [
          'Data Sheet review',
          'Material Requisition review',
          'Pressure ratings',
          'Medium compatibility',
          'Connection specs and duty cycles',
          'Discrepancies eliminated before ordering',
        ],
      },
      {
        index: '02',
        icon: 'valve',
        slug: 'flow-control',
        title: 'Oil & Gas Flow Control & Instrumentation',
        short: 'Severe-service valves, pumps, compressors and Ex-proof E&I.',
        full:
          'Certified supply of severe-service valves, pumps, compressors, and Ex-proof E&I modules compliant with API, SIL 3, NACE, and ATEX standards.',
        items: [
          'Severe-service valves',
          'API 610 / API 674 pumps',
          'Gas compressors',
          'Ex-proof E&I modules (Ex d / Ex ia)',
          'Sour service (NACE MR0175)',
          'High-pressure and cryogenic duty',
        ],
      },
      {
        index: '03',
        icon: 'mining',
        slug: 'mining',
        title: 'Mining Equipment & Wear Solutions',
        short: 'Crushing spares, slurry pumps, conveyor components.',
        full:
          'High-durability crushing & grinding spares, slurry pumping systems, conveyor components, and heavy fleet parts built for maximum abrasion resistance.',
        items: [
          'Crushing & grinding spares',
          'Crusher liners',
          'Grinding media',
          'Slurry pumps',
          'Conveyor components',
          'Wear plates',
          'Heavy fleet parts',
        ],
      },
      {
        index: '04',
        icon: 'quality',
        slug: 'quality',
        title: '3-Stage Quality Assurance & Full Traceability',
        short: 'Pre-shipment inspection and complete documentation.',
        full:
          'Zero-defect policy. Every unit undergoes rigorous pre-shipment inspection: dimensional checks, coating thickness testing and hydrostatic testing, delivered with complete documentation packages — factory acceptance test (FAT) reports, material test reports (MTRs to EN 10204 3.1/3.2) and full compliance with ATEX, IECEx, API and ISO standards.',
        items: [
          'Dimensional checks',
          'Coating thickness testing',
          'Hydrostatic testing',
          'Factory acceptance test (FAT) reports',
          'MTRs to EN 10204 3.1/3.2',
          'ATEX, IECEx, API, ISO compliance',
        ],
      },
      {
        index: '05',
        icon: 'swap',
        slug: 'equivalents',
        title: 'Strategic Equivalents & Obsolescence Management',
        short: 'Fully compatible equivalents and shorter lead times.',
        full:
          'Facing discontinued items or extended lead times? We identify fully compatible form-fit-function equivalents from vetted global manufacturers, providing comparative engineering matrices to lower lead times without compromising safety margins.',
        items: [
          'Discontinued item replacement',
          'Form-fit-function equivalents',
          'Vetted global manufacturers',
          'Comparative engineering matrices',
          'Shorter lead times, same safety margins',
        ],
      },
      {
        index: '06',
        icon: 'freight',
        slug: 'logistics',
        title: 'Project Logistics & Heavy-Haul Transport',
        short: 'Door-to-site delivery to remote locations under SLA.',
        full:
          'Direct door-to-site delivery to remote oilfields and mining deposits. Managed out-of-gauge (OOG) transport, chartering, route surveys, hazardous material transport and customs clearance — with transparent supply chain tracking and firm contractual delivery windows under strict SLA terms backed by financial performance guarantees.',
        items: [
          'Door-to-site delivery',
          'Out-of-gauge (OOG) heavy-lift',
          'Multimodal transit and chartering',
          'Route surveys',
          'Hazardous material transport',
          'Customs clearance',
          'Supply chain tracking',
          'Firm SLA delivery windows',
        ],
      },
    ],

    capabilities: [
      {
        index: '01',
        icon: 'plant',
        title: 'Manufacturers',
        text: 'Vetted global manufacturers of certified equipment.',
      },
      {
        index: '02',
        icon: 'warehouse',
        title: 'Logistics',
        text: 'Delivery to remote sites, including out-of-gauge cargo.',
      },
      {
        index: '03',
        icon: 'agreement',
        title: 'Contractual deadlines',
        text: 'Delivery within windows fixed by contract and SLA.',
      },
    ],

    advantages: [
      {
        index: '01',
        title: 'Engineering audit',
        text: 'Datasheets and specifications checked before order placement.',
      },
      {
        index: '02',
        title: 'Quality assurance',
        text: 'Pre-shipment inspection, FAT and MTRs to EN 10204 3.1/3.2.',
      },
      {
        index: '03',
        title: 'SLA delivery',
        text: 'Firm contractual delivery windows and transparent tracking.',
      },
      {
        index: '04',
        title: 'Standards',
        text: 'Equipment to API, NACE, SIL 3, ATEX / IECEx.',
      },
    ],

    specialists: [
      {
        index: '01',
        title: 'Engineering audit',
        text: 'Pressure ratings, medium compatibility and connections verified before ordering.',
      },
      {
        index: '02',
        title: 'Equivalents',
        text: 'Form-fit-function replacements backed by a comparative matrix.',
      },
      {
        index: '03',
        title: 'Documentation',
        text: 'FAT reports, material certificates and permit documentation compiled.',
      },
    ],

    staffEngineers: [
      'Equipment engineers',
      'Quality engineers',
      'Standardisation engineers',
      'Certification engineers',
    ],

    workflow: [
      {
        index: '01',
        title: 'Request',
        text: 'Datasheet, material requisition, specification or RFP.',
      },
      {
        index: '02',
        title: 'Technical audit',
        text: 'Parameters verified, discrepancies removed, equivalents sourced.',
      },
      {
        index: '03',
        title: 'Commercial offer',
        text: 'Price, SLA delivery windows, shipping terms.',
      },
      {
        index: '04',
        title: 'Quality assurance and delivery',
        text: 'Inspection, documentation package, delivery to site.',
      },
    ],

    catalog: [
      {
        id: 'oil-gas',
        short: 'Oil & Gas',
        icon: 'oil',
        title: 'Oil & Gas',
        lead: 'Severe-service valves, API pumps, gas compression, Ex-proof instrumentation.',
        scope: ['Severe-service valves', 'API pumps', 'Gas compression', 'Ex-proof instrumentation'],
        standards: ['API 6D', 'API 610', 'NACE MR0175', 'SIL 3', 'ATEX / IECEx'],
        details: [
          {
            title: 'Flow Control & Valves',
            standards: 'API 6D / API 600 / ISO 10423 / SIL 3',
            field: 'High-pressure, sour gas (NACE MR0175), cryogenic, and severe service applications',
          },
          {
            title: 'Instrumentation & Control (E&I)',
            standards: 'ATEX / IECEx / Ex d / Ex ia / IP67',
            field: 'Hazardous Area Zones 0, 1, 2 for offshore platforms and refineries',
          },
          {
            title: 'Pumping & Compression Systems',
            standards: 'API 610 / API 674 / ISO 13709',
            field: 'Produced water injection, crude oil transfer, and hydrocarbon processing',
          },
        ],
      },
      {
        id: 'mining',
        short: 'Mining & Minerals',
        icon: 'mining',
        title: 'Mining & Minerals',
        lead: 'Slurry pumps, crusher liners, grinding media, conveyor hardware, wear plates.',
        scope: ['Slurry pumps', 'Crusher liners', 'Grinding media', 'Conveyor hardware', 'Wear plates'],
        standards: ['ISO 9001', 'DIN', 'ASTM', 'High-Chrome / Manganese Specs'],
      },
      {
        id: 'project-logistics',
        short: 'Project Logistics',
        icon: 'freight',
        title: 'Project Logistics',
        lead: 'OOG heavy-lift, multimodal transit, chartering, site delivery.',
        scope: ['OOG heavy-lift', 'Multimodal transit', 'Chartering', 'Site delivery'],
        standards: ['Incoterms 2020', 'Full Cargo Insurance', 'ISO 28000'],
      },
    ],
  },

  ui: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Capabilities',
      products: 'Products',
      contacts: 'Contacts',
      allServices: 'All capabilities',
      allProducts: 'Full equipment matrix',
    },

    header: {
      cta: 'Send a request',
      toHome: 'Go to home page',
      mainNav: 'Main menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Site language',
      skip: 'Skip to content',
    },

    breadcrumbs: {
      label: 'You are here',
      home: 'Home',
    },

    footer: {
      blurb:
        'Integrated equipment supply and global project logistics for Oil & Gas and Mining enterprises worldwide.',
      badges: ['API · NACE · ATEX', 'EN 10204 3.1/3.2', 'Heavy-haul logistics', 'Engineering audit'],
      cta: 'Send a request',
      contacts: 'Contacts',
      sitemap: 'Sections',
      products: 'Products',
      phone: 'Phone',
      email: 'E-mail',
      region: 'Region',
      legal: 'Legal entity',
      rights: 'All rights reserved.',
    },

    brandStrip: {
      tag: 'Manufacturers',
      title: 'Over 400 industrial brands',
      text:
        'Direct work with manufacturing plants in Europe, the UK, the USA and China. Equivalents and replacements selected to your technical specification.',
    },

    cta: {
      title: 'Submit your datasheets or specifications — we will audit and price the supply',
      text: 'We accept Data Sheets, Material Requisitions and RFPs, and reply with lead times, price and delivery terms.',
      button: 'Submit a request',
      meta: 'Engineering audit • Strategic equivalents • SLA delivery',
    },

    notFound: {
      code: 'Error 404',
      title: 'Page not found',
      lead: 'Check the address or return to the main sections of the site.',
      button: 'Go to home page',
    },

    home: {
      eyebrow: 'For Oil & Gas and Mining Enterprises Worldwide',
      h1: ['Integrated Equipment Supply', '& Global Project Logistics'],
      lead:
        'We power energy, mining, and industrial infrastructure with certified equipment, technical auditing, and end-to-end heavy-haul logistics. Ensuring continuous operations and zero downtime for severe-service assets across remote global locations.',
      ctaPrimary: 'Submit RFP / Specifications',
      ctaProfile: 'Download Corporate Profile (PDF)',
      trust: [
        { title: 'Engineering audit', text: 'Datasheets verified before order placement' },
        { title: 'API · NACE · ATEX', text: 'Certified equipment for severe service' },
        { title: 'SLA delivery', text: 'Door-to-site, including out-of-gauge cargo' },
      ],
      services: {
        label: 'Core Operational Capabilities',
        title: 'We do more than supply hardware',
        desc: 'Technical auditing of requests, fast assembly of complex specifications and a complete package of permit documentation.',
        more: 'Learn more',
      },
      matrix: {
        label: 'Equipment & Compliance Matrix',
        title: 'Equipment and compliance',
        desc: 'Sectors, primary equipment scope and the standards our equipment is supplied to.',
        colSector: 'Sector',
        colScope: 'Primary Equipment Scope',
        colStandards: 'Standards & Certifications',
        all: 'Equipment details',
      },
      industries: {
        label: 'Industries',
        title: 'Who we supply',
        desc: 'Continuous operations and zero downtime for severe-service assets across remote global locations.',
        posterAlt: 'Assembly line: a worker in gloves fitting an electric motor stator',
        videoLabels: ['Manufacturing', 'Power generation', 'Sea freight'],
        items: [
          { title: 'Oil & Gas', text: 'Valves, pumps, compressors, Ex-proof instrumentation' },
          { title: 'Mining & Minerals', text: 'Slurry pumps, liners, conveyors, wear plates' },
          { title: 'Energy & infrastructure', text: 'Process equipment and project logistics' },
        ],
      },
      network: {
        label: 'Project Logistics',
        title: 'Door-to-site delivery to remote oilfields and mining deposits',
        desc: 'Out-of-gauge transport, chartering, route surveys and customs clearance — under strict SLA terms.',
        regions: ['Europe', 'United Kingdom', 'USA', 'China', '→ your site'],
        steps: [
          { title: 'Out-of-gauge (OOG)', text: 'Heavy-lift and oversized cargo' },
          { title: 'Chartering & multimodal', text: 'Sea, rail and road transit' },
          { title: 'Customs clearance', text: 'Including hazardous materials' },
          { title: 'SLA tracking', text: 'Transparent supply chain, firm delivery windows' },
        ],
      },
      about: {
        label: 'About',
        title: 'Certified equipment, technical auditing and end-to-end logistics',
        button: 'More about the company',
        stepsTitle: 'How a request is handled',
      },
      contact: {
        label: 'Request',
        title: 'Submit your datasheets or specifications',
        desc: 'We will audit them and reply with lead times, price and delivery terms.',
      },
    },

    about: {
      label: 'About',
      title: 'About the company',
      mission: {
        label: 'Mission',
        title: 'A partnership built on trust',
        industries: 'Who we supply',
      },
      capabilities: {
        label: 'Our capabilities',
        title: 'Manufacturers, warehouses, clients',
        desc: 'The resources that keep requests fulfilled on time.',
      },
      specialists: {
        label: 'Our specialists',
        title: 'Who handles your request',
        desc: 'Every request is processed technically before it reaches procurement.',
      },
      staff: {
        label: 'On staff',
        title: 'Engineering team',
      },
      geography: {
        label: 'Supply geography',
        title: 'Door-to-site delivery to remote oilfields and mining deposits',
        text:
          'Vetted global manufacturers, out-of-gauge transport, chartering, route surveys and customs clearance — under strict SLA terms.',
        button: 'Equipment & compliance',
        caption: 'Astana · Republic of Kazakhstan',
      },
    },

    services: {
      label: 'Capabilities',
      title: 'Core Operational Capabilities',
      lead: 'Engineering audit, certified supply for Oil & Gas and Mining, quality assurance, strategic equivalents and project logistics.',
      direction: 'Capability',
      request: 'Submit specifications',
      scope: 'What is included',
      workflow: {
        label: 'How we work',
        title: 'How a request is handled',
        desc: 'From datasheet to delivery on site — four steps.',
      },
      cta: {
        title: 'Send us your datasheets or RFP — we will audit them and propose the supply',
        text: 'Pressure ratings, medium compatibility and connections verified before order placement.',
      },
    },

    products: {
      label: 'Products',
      title: 'Equipment & Compliance',
      lead: 'Equipment and compliance matrix by sector: what we supply and the requirements it meets.',
      statSectors: 'Sectors',
      statStandards: 'API · NACE · ATEX',
      statStandardsText: 'Standards',
      statDocs: 'EN 10204 3.1/3.2',
      statDocsText: 'Certificates',
      groupsLabel: 'Sectors',
      notFoundLead: 'Need an item outside the matrix? Send your specification to ',
      scope: 'Primary Equipment Scope',
      standards: 'Standards & Certifications',
      details: 'Categories and operational field',
      field: 'Operational field',
      request: 'Submit specifications',
      cta: {
        title: 'Discontinued item? We will source a compatible equivalent',
        text: 'Form-fit-function equivalents from vetted manufacturers — backed by a comparative engineering matrix.',
      },
    },

    contacts: {
      label: 'Contacts',
      title: 'Contacts',
      lead: 'Requests for supply and technical audit are accepted by phone, e-mail and through the form on this page.',
      infoLabel: 'Get in touch',
      infoTitle: 'Contact us',
      phone: 'Phone',
      email: 'E-mail',
      legal: 'Legal entity',
      region: 'Region of operation',
      hintTitle: 'Please include',
      hints: [
        'Data Sheet or Material Requisition',
        'Quantity and required delivery date',
        'Site address and delivery terms (Incoterms)',
      ],
      formLabel: 'Request form',
      formTitle: 'Request for supply or technical audit',
      required: 'Fields marked * are required.',
      fields: {
        company: 'Company *',
        companyPlaceholder: 'Company name',
        name: 'Contact person *',
        namePlaceholder: 'Full name, position',
        phone: 'Phone *',
        phonePlaceholder: '+7 ___ ___ __ __',
        email: 'E-mail *',
        emailPlaceholder: 'name@company.kz',
        subject: 'Area of work',
        subjectOther: 'Other',
        message: 'Request *',
        messagePlaceholder: 'Items, parameters (pressure, medium, connection), quantity, required delivery date',
        consent: 'I consent to the processing of the data provided for review of this request.',
      },
      errors: {
        company: 'Please enter your company',
        name: 'Please enter a contact person',
        phone: 'Please enter a phone number',
        email: 'Please enter a valid e-mail',
        message: 'Describe your request — at least 10 characters',
        consent: 'Consent to data processing is required',
      },
      submit: 'Send request',
      sending: 'Sending…',
      sentTitle: 'Request sent',
      sent: 'We will get back to you during business hours with lead times and price.',
      again: 'Send another one',
      error: 'Could not send. Please also write to ',
      stub: 'The form runs in stub mode. Set VITE_FORM_ENDPOINT to submit to a server.',
    },
  },
}
