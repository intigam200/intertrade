// English version of the site. Anchors (slug, id) are shared with the Russian
// bundle, so switching language keeps the reader in the same place on a page.
export default {
  meta: {
    title: 'Intertrade and Consulting Group — industrial supply, logistics, technical audit',
    description:
      'Intertrade and Consulting Group LLP supplies industrial equipment and components to manufacturing, quarrying and oil & gas enterprises in Kazakhstan. Over 400 brands, direct supply from plants in Europe, the UK, the USA and China.',
  },

  // A separate title and description per page: one site-wide title makes
  // browser tabs and search results meaningless.
  pages: {
    home: {
      title: 'Intertrade and Consulting Group — industrial supply, logistics, technical audit',
      description:
        'Intertrade and Consulting Group LLP supplies industrial equipment and components to manufacturing, quarrying and oil & gas enterprises in Kazakhstan. Over 400 brands, direct supply from plants in Europe, the UK, the USA and China.',
    },
    about: {
      title: 'About the company — Intertrade and Consulting Group',
      description:
        'Supplier of industrial equipment for enterprises in Kazakhstan: manufacturers, warehouses, engineering team and the geography of direct supply.',
    },
    services: {
      title: 'Services: supply, logistics, technical audit — Intertrade and Consulting Group',
      description:
        'Supply for enterprises, logistics with customs clearance and documentation, technical audit of equipment and procurement outsourcing. How a request is handled.',
    },
    products: {
      title: 'Product catalogue — Intertrade and Consulting Group',
      description:
        'Actuators and spare parts, steam traps and steam system equipment, flanges, flexible hoses, expansion joints. Items sourced by specification, drawing or part number.',
    },
    contacts: {
      title: 'Contacts — Intertrade and Consulting Group',
      description:
        'Requests for supply and technical audit: phone, e-mail and the request form. Intertrade and Consulting Group LLP, Republic of Kazakhstan.',
    },
  },

  data: {
    contacts: {
      legalName: 'Intertrade and Consulting Group LLP',
      country: 'Republic of Kazakhstan',
    },

    mission:
      'Intertrade and Consulting Group LLP builds long-term partnerships with its clients, founded on trust and respect.',

    positioning:
      'Supplier of industrial equipment and components for manufacturing, quarrying (mining) and oil & gas enterprises in Kazakhstan. We work directly with manufacturing plants in Europe, the UK, the USA and China.',

    industries: [
      'Manufacturing enterprises',
      'Quarrying and mining enterprises',
      'Oil and gas enterprises',
    ],

    activities: [
      {
        index: '01',
        icon: 'valve',
        slug: 'supply',
        title: 'Supply',
        short: 'Equipment, consumables, spare parts and materials for production needs.',
        full:
          'Supply of equipment, consumables, PPE, machine tools, hand tools, spare parts, lubricants, measuring instruments, steel structures, valves and fittings, and construction materials.',
        items: [
          'Equipment',
          'Consumables',
          'PPE',
          'Machine tools',
          'Hand tools',
          'Spare parts',
          'Lubricants',
          'Measuring instruments',
          'Steel structures',
          'Valves and fittings',
          'Construction materials',
        ],
      },
      {
        index: '02',
        icon: 'freight',
        slug: 'logistics',
        title: 'Logistics',
        short: 'The full range of logistics services — from transport to documentation.',
        full:
          'The full range of logistics services: transport, warehousing, customs clearance and preparation of documentation.',
        items: ['Transport', 'Warehousing', 'Customs clearance', 'Documentation'],
      },
      {
        index: '03',
        icon: 'gauge',
        slug: 'technical-audit',
        title: 'Technical audit',
        short: 'Analysis of processes and equipment condition, solutions for optimisation.',
        full:
          'Analysis of production processes and equipment condition, with solutions for optimising production.',
        items: [
          'Analysis of production processes',
          'Assessment of equipment condition',
          'Solutions for optimising production',
        ],
      },
    ],

    capabilities: [
      {
        index: '01',
        icon: 'plant',
        title: 'Manufacturers',
        text: 'Partnerships with leading manufacturers of equipment and components.',
      },
      {
        index: '02',
        icon: 'warehouse',
        title: 'Warehouses',
        text: 'Warehousing capacity for fast and efficient logistics.',
      },
      {
        index: '03',
        icon: 'agreement',
        title: 'Clients',
        text: 'A focus on long-term cooperation.',
      },
    ],

    advantages: [
      {
        index: '01',
        title: 'Direct supply',
        text: 'We work directly with supplier plants in Europe, the UK, the USA and China.',
      },
      {
        index: '02',
        title: 'Individual approach',
        text: 'Personal service and flexible pricing for every client.',
      },
      {
        index: '03',
        title: 'Shortest lead times',
        text: 'Minimum delivery times and stock held in the warehouse.',
      },
      {
        index: '04',
        title: 'Relationships built on trust',
        text: 'Strong partnerships with major enterprises across Kazakhstan.',
      },
    ],

    outsourcing: [
      { index: '01', title: 'Lower costs', text: 'Reduced spending on the procurement process.' },
      {
        index: '02',
        title: 'Higher quality',
        text: 'Better quality of purchased materials and optimised procurement.',
      },
      {
        index: '03',
        title: 'Freed-up resources',
        text: 'More of the enterprise’s time for strategic work.',
      },
    ],

    specialists: [
      { index: '01', title: 'Experience', text: 'Supply management for enterprises of any scale.' },
      {
        index: '02',
        title: 'Product selection',
        text: 'Technical processing of the order and selection by quality and cost.',
      },
      {
        index: '03',
        title: 'Qualification',
        text: 'A team of specialists for tasks of any complexity.',
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
        text: 'A specification, drawing or part number from the enterprise.',
      },
      {
        index: '02',
        title: 'Technical processing',
        text: 'Our engineers select items, equivalents and replacements.',
      },
      {
        index: '03',
        title: 'Quotation',
        text: 'Price, lead time and shipping terms.',
      },
      {
        index: '04',
        title: 'Delivery',
        text: 'Transport, customs clearance, documents and delivery to site.',
      },
    ],

    catalog: [
      {
        id: 'actuators',
        short: 'Actuators',
        code: 'PA',
        icon: 'actuator',
        title: 'Actuators and spare parts',
        lead:
          'Actuation for isolating and control pipeline valves, together with control systems and spare parts.',
        groups: [
          {
            title: 'Actuators',
            items: ['Multi-turn actuators', 'Quarter-turn actuators', 'Linear actuators'],
          },
          {
            title: 'Control and components',
            items: ['Actuator control systems', 'Actuator spare parts'],
          },
        ],
      },
      {
        id: 'steam-traps',
        short: 'Steam traps',
        code: 'ST',
        icon: 'steamtrap',
        title: 'Steam traps and steam system equipment',
        lead:
          'Equipment for condensate removal, protection and metering in industrial steam systems.',
        groups: [
          {
            title: 'Steam traps',
            items: [
              'Ball float steam trap',
              'Thermodynamic steam trap',
              'Thermostatic steam trap',
              'Bimetallic steam trap',
              'Inverted bucket steam trap',
            ],
          },
          {
            title: 'Steam system equipment',
            items: [
              'Vacuum breaker',
              'Disc check valve',
              'Sight glass',
              'Steam separator',
              'Steam flow meters',
            ],
          },
        ],
      },
      {
        id: 'flanges',
        short: 'Flanges',
        code: 'FL',
        icon: 'flange',
        title: 'Flanges',
        lead: 'Flanges in all principal types and facings to match project requirements.',
        groups: [
          {
            title: 'By connection type',
            items: [
              'Weld Neck',
              'Slip-On',
              'Socket Weld',
              'Threaded',
              'Blind',
              'Lap Joint',
              'Long Weld Neck',
              'Reducing',
              'Expander',
            ],
          },
          {
            title: 'Special types and facings',
            items: [
              'Orifice',
              'Spectacle Blind',
              'RTJ',
              'Flat Face',
              'Raised Face',
              'Tongue and Groove',
              'Male and Female',
            ],
          },
        ],
      },
      {
        id: 'hoses',
        short: 'Flexible hoses',
        code: 'FH',
        icon: 'hose',
        title: 'Flexible hoses',
        lead:
          'Flexible metal and composite hoses for process, building services and fire protection systems.',
        groups: [
          {
            title: 'Range',
            items: [
              'Hoses in coils',
              'Flexible metal hoses with fittings',
              'Fan coil hoses',
              'Omega V Flex',
              'Omega U Flex',
              'Sprinkler system hoses',
              'Fit-Set',
            ],
          },
        ],
      },
      {
        id: 'expansion-joints',
        short: 'Expansion joints',
        code: 'EJ',
        icon: 'bellows',
        title: 'Expansion joints',
        lead:
          'Compensation for thermal expansion, vibration and installation offsets in pipework and equipment.',
        groups: [
          {
            title: 'Metal',
            items: [
              'Axial expansion joint',
              'Externally pressurised expansion joint',
              'Universal expansion joint',
              'Gimbal expansion joint',
              'Pipe expansion joint',
              'Lens expansion joint',
            ],
          },
          {
            title: 'Rubber and special',
            items: ['Flexible connector', 'Rubber expansion joint', 'Rectangular expansion joint'],
          },
        ],
      },
    ],
  },

  ui: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      products: 'Products',
      contacts: 'Contacts',
      allServices: 'All services',
      allProducts: 'Full catalogue',
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
        'Supply of industrial equipment and components for manufacturing, quarrying and oil & gas enterprises in Kazakhstan.',
      badges: ['Direct supply', '400+ brands', 'Customs & paperwork', 'Engineers on staff'],
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
      title: 'Send us your specification — we will source and price the supply',
      text: 'We accept requests by specification, drawing or part number, and reply with lead times, price and delivery terms.',
      button: 'Submit a request',
      meta: 'Fast response • Equivalents sourced • Engineering support',
    },

    notFound: {
      code: 'Error 404',
      title: 'Page not found',
      lead: 'Check the address or return to the main sections of the site.',
      button: 'Go to home page',
    },

    home: {
      eyebrow: 'Industrial supply · Kazakhstan',
      h1: ['Industrial equipment', 'and components'],
      lead:
        'We supply equipment, components and spare parts to manufacturing, quarrying and oil & gas enterprises — directly from plants in Europe, the UK, the USA and China.',
      ctaPrimary: 'Send a request',
      ctaSecondary: 'Product catalogue',
      trust: [
        { title: '400+ brands', text: 'Direct contracts with manufacturing plants' },
        { title: '4 regions', text: 'Europe, the UK, the USA, China' },
        { title: 'End to end', text: 'Logistics, customs and paperwork' },
      ],
      services: {
        label: 'Areas of work',
        title: 'Supply, logistics and technical audit',
        desc: 'Three areas covering an item’s path from the enterprise’s request to delivery on site.',
        more: 'Learn more',
      },
      catalog: {
        label: 'Catalogue',
        title: 'What we supply',
        desc: 'The principal supply groups. Items outside the catalogue are sourced by specification, drawing or part number.',
        count: '{n} items',
        all: 'Open the full catalogue',
      },
      industries: {
        label: 'Industries',
        title: 'Who we supply',
        desc: 'Equipment and spare parts for enterprises where downtime costs more than the delivery.',
        posterAlt: 'Assembly line: a worker in gloves fitting an electric motor stator',
        videoLabels: ['Manufacturing', 'Power generation', 'Sea freight'],
        items: [
          { title: 'Manufacturing enterprises', text: 'Equipment, spare parts, consumables' },
          { title: 'Quarrying and mining', text: 'Components for machinery and processing' },
          { title: 'Oil & gas enterprises', text: 'Valves, actuators, flanges, expansion joints' },
        ],
      },
      why: {
        label: 'Why us',
        title: 'Why enterprises work with us',
        desc:
          'Every request is processed technically before it reaches procurement: engineers check items, equivalents and documents.',
        button: 'About the company',
        items: [
          {
            title: 'Technical processing of requests',
            text: 'Engineers select items, equivalents and replacements by specification, drawing or part number.',
          },
          {
            title: 'Selection by quality and cost',
            text: 'We compare manufacturers’ offers and propose the best balance of price and lead time.',
          },
          {
            title: 'Standardisation and certification',
            text: 'Standardisation and certification engineers check that the supply meets requirements.',
          },
          {
            title: 'One contractor for the whole route',
            text: 'Supply, logistics and technical audit — with no hand-offs between contractors.',
          },
        ],
      },
      network: {
        label: 'Supply geography',
        title: 'Plants in Europe, the UK, the USA and China — for enterprises in Kazakhstan',
        desc: 'We handle the whole route of the cargo: from the manufacturing plant to delivery on site.',
        regions: ['Europe', 'United Kingdom', 'USA', 'China', '→ Kazakhstan'],
        steps: [
          'Delivery from plant to site',
          'Storage and consolidation',
          'Customs clearance',
          'Certificates and shipping documents',
        ],
      },
      about: {
        label: 'About',
        title: 'Long-term partnership with enterprises in Kazakhstan',
        button: 'More about the company',
        stepsTitle: 'How a request is handled',
      },
      contact: {
        label: 'Request',
        title: 'Tell us what you need supplied',
        desc: 'We will reply with lead times, price and delivery terms. You can attach a specification to your e-mail.',
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
        title: 'Plants in Europe, the UK, the USA and China — for enterprises in Kazakhstan',
        text:
          'We work directly with manufacturing plants. Our portfolio holds over 400 industrial brands — equipment, components and spare parts for your existing process schemes.',
        button: 'Product catalogue',
        caption: 'Astana · Republic of Kazakhstan',
      },
    },

    services: {
      label: 'Services',
      title: 'Services',
      lead: 'Supply, logistics and technical audit — separately or as a single supply loop for your enterprise.',
      direction: 'Area',
      outsourcingNav: 'Procurement outsourcing',
      request: 'Request in this area',
      scope: 'Scope of work',
      outsourcing: {
        label: 'Procurement outsourcing',
        title: 'Procurement handled by the contractor',
        desc: 'Handing over procurement takes non-core work off the enterprise.',
      },
      workflow: {
        label: 'How we work',
        title: 'How a request is handled',
        desc: 'From the arrival of the specification to delivery on site — four steps.',
      },
      cta: {
        title: 'Describe the task — we will propose the scope of supply and lead times',
        text: 'Requests are accepted by specification, drawing, part number or description of the unit.',
      },
    },

    products: {
      label: 'Products',
      title: 'Product catalogue',
      lead:
        'The principal supply groups, broken down by type. Items outside the catalogue are sourced by specification, drawing or part number.',
      statGroups: 'Groups',
      statPositions: 'Items',
      statBrands: 'Brands',
      groupsLabel: 'Product groups',
      notFoundLead: 'Can’t find an item? Send your specification to ',
      itemsCount: 'items',
      search: {
        label: 'Search the catalogue',
        placeholder: 'Search: e.g. flange, actuator, RTJ',
        clear: 'Clear search',
        found: 'Items found: {n}',
        emptyTitle: 'This item is not in the catalogue',
        empty: 'That doesn’t mean we can’t supply it: the catalogue lists only the main groups. Send us a request.',
      },
      closing:
        'Beyond the catalogue we supply consumables, PPE, machine tools, hand tools, spare parts, lubricants, measuring instruments, steel structures, valves and fittings, and construction materials.',
      request: 'Request an item',
      cta: {
        title: 'We will find an equivalent or replacement for your existing scheme',
        text: 'Give us the manufacturer, part number or unit parameters — our engineers will select the item by quality and cost.',
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
        'Item name, part number or drawing',
        'Quantity and required delivery date',
        'Shipping terms and site address',
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
        subjectOutsourcing: 'Procurement outsourcing',
        subjectOther: 'Other',
        message: 'Request *',
        messagePlaceholder: 'Item names, part numbers, quantity, required delivery date',
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
