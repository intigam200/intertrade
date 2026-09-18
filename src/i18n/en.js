// English version of the site. Anchors (slug, id) are shared with the Russian
// bundle, so switching language keeps the reader in the same place on a page.
export default {
  meta: {
    title: 'Intertrade and Consulting Group — industrial supply, logistics, technical audit',
    description:
      'Intertrade and Consulting Group LLP supplies industrial equipment and components to manufacturing, quarrying and oil & gas enterprises in Kazakhstan. Over 400 brands, direct supply from plants in Europe, the UK, the USA and China.',
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
    },

    header: {
      topline: 'Industrial supply · Logistics · Technical audit',
      cta: 'Send a request',
      toHome: 'Go to home page',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Site language',
    },

    footer: {
      blurb:
        'Supply of industrial equipment and components for manufacturing, quarrying and oil & gas enterprises in Kazakhstan. Over 400 brands in the portfolio.',
      cta: 'Request a supply',
      sitemap: 'Site map',
      products: 'Products',
      contacts: 'Contacts',
      phone: 'Phone',
      email: 'E-mail',
      legal: 'Legal entity',
    },

    brandStrip: {
      tag: 'Manufacturers',
      title: 'Over 400 industrial brands',
      text:
        'Direct work with manufacturing plants in Europe, the UK, the USA and China. Equivalents and replacements selected to your technical specification.',
    },

    cta: {
      title: 'Send us your specification — we will source and price the supply',
      text:
        'We accept requests by specification, drawing or part number, and reply with lead times, price and delivery terms.',
      button: 'Submit a request',
    },

    notFound: {
      code: '404',
      title: 'Page not found',
      lead: 'Check the address or return to the main sections of the site.',
      button: 'Go to home page',
    },

    home: {
      tag: 'LLP · Republic of Kazakhstan · Direct supply',
      h1: {
        line1: 'Industrial',
        line2: 'equipment',
        accent: ' and components',
        line3: 'for enterprises',
      },
      ctaPrimary: 'Send a request',
      ctaSecondary: 'Product catalogue',
      heroAlt:
        'Night view of an oil refinery: process columns and trunk pipelines running to the horizon',
      heroCaption: 'Oil refining · Power generation · Pipeline networks',
      figures: [
        'brands in the portfolio',
        'regions of direct supply',
        'industries served',
        'catalogue categories',
      ],
      industriesTag: 'Industries',
      activities: {
        tag: '01 / Areas of work',
        title: 'Supply, logistics and technical audit',
        lead:
          'Three areas of work covering an item’s path from the enterprise’s request to delivery on site.',
        more: 'Details',
      },
      catalog: {
        tag: '02 / Catalogue',
        title: 'Products',
        lead:
          'The principal supply groups. The full range is on the catalogue page and available on request.',
        colIndex: 'Index',
        colGroup: 'Product group',
        colCount: 'Items',
        goTo: 'Go to the “{title}” section',
        open: 'Open the catalogue',
      },
      advantages: {
        tag: '03 / Advantages',
        title: 'Why enterprises work with us',
        lead: 'The terms on which supply under our contracts is built.',
      },
      capabilitiesTag: 'Capabilities',
      capabilitiesAlt:
        'Welding work at a plant: a shower of sparks from arc welding of a steel structure',
      aboutLink: 'About the company',
    },

    about: {
      code: '01 / About',
      title: 'About the company',
      missionTag: 'Mission',
      capabilities: {
        tag: '02 / Our capabilities',
        title: 'Manufacturers, warehouses, clients',
        lead: 'The resources that keep requests fulfilled on time.',
      },
      specialists: {
        tag: '03 / Our specialists',
        title: 'Who handles your request',
        lead: 'Every request is processed technically before it reaches procurement.',
      },
      staffTag: 'On staff',
      staffTitle: 'Engineering team',
      geography: {
        tag: 'Supply geography',
        title: 'Plants in Europe, the UK, the USA and China — for enterprises in Kazakhstan',
        text:
          'We work directly with manufacturing plants. Our portfolio holds over 400 industrial brands — equipment, components and spare parts for your existing process schemes.',
        button: 'Product catalogue',
        caption: 'Astana · Republic of Kazakhstan',
      },
    },

    services: {
      code: '02 / Services',
      title: 'Services',
      lead:
        'Supply, logistics and technical audit — separately or as a single supply loop for your enterprise.',
      outsourcingNav: 'Procurement outsourcing',
      request: 'Request in this area',
      scopeTag: 'Scope of work',
      outsourcing: {
        tag: '04 / Procurement outsourcing',
        title: 'Procurement handled by the contractor',
        lead: 'Handing over procurement takes non-core work off the enterprise.',
      },
      workflow: {
        tag: '05 / How we work',
        title: 'How a request is handled',
        lead: 'From the arrival of the specification to delivery on site.',
      },
      cta: {
        title: 'Describe the task — we will propose the scope of supply and lead times',
        text: 'Requests are accepted by specification, drawing, part number or description of the unit.',
      },
    },

    products: {
      code: '03 / Products',
      title: 'Product catalogue',
      lead:
        'The principal supply groups, broken down by type. Items outside the catalogue are sourced by specification, drawing or part number.',
      statGroups: 'Groups',
      statPositions: 'Items in the catalogue',
      statBrands: 'Brands in the portfolio',
      groupsTag: 'Groups',
      notFoundLead: 'Can’t find an item? Send your specification to ',
      itemsCount: 'items',
      closing:
        'Beyond the catalogue we supply consumables, PPE, machine tools, hand tools, spare parts, lubricants, measuring instruments, steel structures, valves and fittings, and construction materials.',
      request: 'Request an item',
      cta: {
        title: 'We will find an equivalent or replacement for your existing scheme',
        text:
          'Give us the manufacturer, part number or unit parameters — our engineers will select the item by quality and cost.',
      },
    },

    contacts: {
      code: '04 / Contacts',
      title: 'Contacts',
      lead:
        'Requests for supply and technical audit are accepted by phone and e-mail, and through the form on this page.',
      tag: 'Get in touch',
      phone: 'Phone',
      email: 'E-mail',
      legal: 'Legal entity',
      region: 'Region of operation',
      directions: 'Areas of work',
      hintTag: 'Please include',
      hints: [
        '— item name, part number or drawing;',
        '— quantity and required delivery date;',
        '— shipping terms and site address.',
      ],
      formTag: 'Request form',
      formTitle: 'Request for supply or technical audit',
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
      sent: 'Request sent. We will get back to you during business hours.',
      error: 'Not sent. Please also write to ',
      stub: 'The form runs in stub mode. Set VITE_FORM_ENDPOINT to submit to a server.',
    },
  },
}
