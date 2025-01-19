export const abi = [
  {
    type: "impl",
    name: "Metabridge",
    interface_name: "metabridge_contract::interface::metabridge::IMetabridge",
  },
  {
    type: "enum",
    name: "core::bool",
    variants: [
      {
        name: "False",
        type: "()",
      },
      {
        name: "True",
        type: "()",
      },
    ],
  },
  {
    type: "struct",
    name: "core::integer::u256",
    members: [
      {
        name: "low",
        type: "core::integer::u128",
      },
      {
        name: "high",
        type: "core::integer::u128",
      },
    ],
  },
  {
    type: "struct",
    name: "metabridge_contract::interface::metabridge::Entrepreneur",
    members: [
      {
        name: "full_name",
        type: "core::felt252",
      },
      {
        name: "email",
        type: "core::felt252",
      },
      {
        name: "country_of_origin",
        type: "core::felt252",
      },
      {
        name: "state",
        type: "core::felt252",
      },
      {
        name: "home_address",
        type: "core::felt252",
      },
      {
        name: "has_registered",
        type: "core::bool",
      },
      {
        name: "milestone_count",
        type: "core::integer::u256",
      },
    ],
  },
  {
    type: "struct",
    name: "metabridge_contract::interface::metabridge::Investor",
    members: [
      {
        name: "full_name",
        type: "core::felt252",
      },
      {
        name: "email",
        type: "core::felt252",
      },
      {
        name: "date_of_birth",
        type: "core::felt252",
      },
      {
        name: "country_of_origin",
        type: "core::felt252",
      },
      {
        name: "region",
        type: "core::felt252",
      },
      {
        name: "city",
        type: "core::felt252",
      },
      {
        name: "home_address",
        type: "core::felt252",
      },
      {
        name: "linkedin_link",
        type: "core::felt252",
      },
    ],
  },
  {
    type: "struct",
    name: "metabridge_contract::interface::metabridge::Project",
    members: [
      {
        name: "project_name",
        type: "core::felt252",
      },
      {
        name: "project_logo",
        type: "core::felt252",
      },
      {
        name: "project_description",
        type: "core::felt252",
      },
      {
        name: "project_story",
        type: "core::felt252",
      },
      {
        name: "project_usecase",
        type: "core::felt252",
      },
      {
        name: "problem_statement",
        type: "core::felt252",
      },
      {
        name: "website",
        type: "core::felt252",
      },
    ],
  },
  {
    type: "struct",
    name: "metabridge_contract::interface::metabridge::Links",
    members: [
      {
        name: "github",
        type: "core::felt252",
      },
      {
        name: "linkedin",
        type: "core::felt252",
      },
      {
        name: "twitter",
        type: "core::felt252",
      },
      {
        name: "telegram",
        type: "core::felt252",
      },
    ],
  },
  {
    type: "struct",
    name: "metabridge_contract::interface::metabridge::Timeframe",
    members: [
      {
        name: "start_date",
        type: "core::felt252",
      },
      {
        name: "end_date",
        type: "core::felt252",
      },
    ],
  },
  {
    type: "struct",
    name: "metabridge_contract::interface::metabridge::Milestone",
    members: [
      {
        name: "title",
        type: "core::felt252",
      },
      {
        name: "description",
        type: "core::felt252",
      },
      {
        name: "timeframe",
        type: "metabridge_contract::interface::metabridge::Timeframe",
      },
      {
        name: "req_fund_for_milestone",
        type: "core::felt252",
      },
      {
        name: "kpi",
        type: "core::felt252",
      },
      {
        name: "roi",
        type: "core::felt252",
      },
    ],
  },
  {
    type: "struct",
    name: "metabridge_contract::interface::metabridge::Team",
    members: [
      {
        name: "full_name",
        type: "core::felt252",
      },
      {
        name: "email",
        type: "core::felt252",
      },
      {
        name: "phone_no",
        type: "core::felt252",
      },
      {
        name: "country",
        type: "core::felt252",
      },
      {
        name: "state",
        type: "core::felt252",
      },
      {
        name: "city",
        type: "core::felt252",
      },
      {
        name: "location_addr",
        type: "core::felt252",
      },
      {
        name: "role",
        type: "core::felt252",
      },
      {
        name: "photo",
        type: "core::felt252",
      },
      {
        name: "linkedIn",
        type: "core::felt252",
      },
      {
        name: "links",
        type: "metabridge_contract::interface::metabridge::Links",
      },
    ],
  },
  {
    type: "struct",
    name: "metabridge_contract::interface::metabridge::Document",
    members: [
      {
        name: "business_reg_doc",
        type: "core::felt252",
      },
      {
        name: "company_license",
        type: "core::felt252",
      },
      {
        name: "business_model",
        type: "core::felt252",
      },
      {
        name: "financial_statement",
        type: "core::felt252",
      },
      {
        name: "roadmap",
        type: "core::felt252",
      },
      {
        name: "pitch_deck",
        type: "core::felt252",
      },
    ],
  },
  {
    type: "struct",
    name: "metabridge_contract::interface::metabridge::EquityDistribution",
    members: [
      {
        name: "totalEquity",
        type: "core::integer::u256",
      },
      {
        name: "distributed_equity",
        type: "core::integer::u256",
      },
      {
        name: "equity_share_offer",
        type: "core::integer::u256",
      },
    ],
  },
  {
    type: "struct",
    name: "metabridge_contract::interface::metabridge::EquityAllocation",
    members: [
      {
        name: "equity_allocation",
        type: "core::integer::u256",
      },
      {
        name: "total_equity_allocated",
        type: "core::integer::u256",
      },
      {
        name: "percentage_allocation",
        type: "core::integer::u256",
      },
    ],
  },
  {
    type: "struct",
    name: "metabridge_contract::interface::metabridge::Equity",
    members: [
      {
        name: "token_equity_distribution",
        type: "metabridge_contract::interface::metabridge::EquityDistribution",
      },
      {
        name: "equity_allocation",
        type: "metabridge_contract::interface::metabridge::EquityAllocation",
      },
    ],
  },
  {
    type: "struct",
    name: "metabridge_contract::interface::metabridge::Order",
    members: [
      {
        name: "project",
        type: "metabridge_contract::interface::metabridge::Project",
      },
      {
        name: "email",
        type: "core::felt252",
      },
      {
        name: "phone_no",
        type: "core::felt252",
      },
      {
        name: "location_addr",
        type: "core::felt252",
      },
      {
        name: "links",
        type: "metabridge_contract::interface::metabridge::Links",
      },
      {
        name: "milestones",
        type: "metabridge_contract::interface::metabridge::Milestone",
      },
      {
        name: "team_details",
        type: "metabridge_contract::interface::metabridge::Team",
      },
      {
        name: "document_upload",
        type: "metabridge_contract::interface::metabridge::Document",
      },
      {
        name: "tokenized_equity_offer",
        type: "metabridge_contract::interface::metabridge::Equity",
      },
      {
        name: "role_in_project",
        type: "core::felt252",
      },
      {
        name: "funding_amount_requested",
        type: "core::integer::u256",
      },
      {
        name: "verified_by_admin",
        type: "core::bool",
      },
      {
        name: "amount_funded",
        type: "core::integer::u256",
      },
    ],
  },
  {
    type: "interface",
    name: "metabridge_contract::interface::metabridge::IMetabridge",
    items: [
      {
        type: "function",
        name: "select_role",
        inputs: [
          {
            name: "user_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "roleTitle",
            type: "core::felt252",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "register_entrepreneur",
        inputs: [
          {
            name: "full_name",
            type: "core::felt252",
          },
          {
            name: "email",
            type: "core::felt252",
          },
          {
            name: "country_of_origin",
            type: "core::felt252",
          },
          {
            name: "state",
            type: "core::felt252",
          },
          {
            name: "home_address",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "metabridge_contract::interface::metabridge::Entrepreneur",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "register_investor",
        inputs: [
          {
            name: "full_name",
            type: "core::felt252",
          },
          {
            name: "email",
            type: "core::felt252",
          },
          {
            name: "date_of_birth",
            type: "core::felt252",
          },
          {
            name: "country_of_origin",
            type: "core::felt252",
          },
          {
            name: "region",
            type: "core::felt252",
          },
          {
            name: "city",
            type: "core::felt252",
          },
          {
            name: "home_address",
            type: "core::felt252",
          },
          {
            name: "linkedin_link",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "metabridge_contract::interface::metabridge::Investor",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "create_order",
        inputs: [
          {
            name: "project",
            type: "metabridge_contract::interface::metabridge::Project",
          },
          {
            name: "email",
            type: "core::felt252",
          },
          {
            name: "phone_no",
            type: "core::felt252",
          },
          {
            name: "location_addr",
            type: "core::felt252",
          },
          {
            name: "links",
            type: "metabridge_contract::interface::metabridge::Links",
          },
          {
            name: "milestones",
            type: "metabridge_contract::interface::metabridge::Milestone",
          },
          {
            name: "team_details",
            type: "metabridge_contract::interface::metabridge::Team",
          },
          {
            name: "document_upload",
            type: "metabridge_contract::interface::metabridge::Document",
          },
          {
            name: "tokenized_equity_offer",
            type: "metabridge_contract::interface::metabridge::Equity",
          },
          {
            name: "role_in_project",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "list_order",
        inputs: [
          {
            name: "order_id",
            type: "core::integer::u256",
          },
          {
            name: "funding_amount",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "metabridge_contract::interface::metabridge::Order",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "add_milestone",
        inputs: [
          {
            name: "order_id",
            type: "core::integer::u256",
          },
          {
            name: "milestone",
            type: "metabridge_contract::interface::metabridge::Milestone",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "invest",
        inputs: [
          {
            name: "order_id",
            type: "core::integer::u256",
          },
          {
            name: "investment_amount",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "commit_funds",
        inputs: [
          {
            name: "order_id",
            type: "core::integer::u256",
          },
          {
            name: "listed_order_id",
            type: "core::integer::u256",
          },
          {
            name: "waiting_pool_id",
            type: "core::integer::u256",
          },
          {
            name: "commit_amount",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "verify_order",
        inputs: [
          {
            name: "order_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "remove_entrepreneur",
        inputs: [
          {
            name: "entrepreneur_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "metabridge_contract::interface::metabridge::Entrepreneur",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "user_has_role",
        inputs: [],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "check_user_role",
        inputs: [
          {
            name: "user_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "view_order",
        inputs: [
          {
            name: "listed_order",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "metabridge_contract::interface::metabridge::Order",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "view_orders",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<metabridge_contract::interface::metabridge::Order>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_total_entrepreneurs",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<metabridge_contract::interface::metabridge::Entrepreneur>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_total_no_of_entrepreneur",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_total_no_of_orders",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "event",
    name: "metabridge_contract::metabridge::MetabridgeContract::Event",
    kind: "enum",
    variants: [],
  },
] as const;
