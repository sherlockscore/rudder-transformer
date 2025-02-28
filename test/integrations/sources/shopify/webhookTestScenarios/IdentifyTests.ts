import { mockFns } from '../mocks';
import { dummySourceConfig } from '../constants';

export const identityTestScenarios = [
  {
    id: 'c008',
    name: 'shopify',
    description: 'Identify Call -> Customer update event from Pixel app',
    module: 'source',
    version: 'v1',
    input: {
      request: {
        body: [
          {
            event: {
              id: 7358220173425,
              email: 'henry@wfls.com',
              created_at: '2024-10-23T16:03:11-04:00',
              updated_at: '2024-11-05T21:54:49-05:00',
              first_name: 'yodi',
              last_name: 'waffles',
              orders_count: 0,
              state: 'disabled',
              total_spent: '0.00',
              last_order_id: null,
              note: null,
              verified_email: true,
              multipass_identifier: null,
              tax_exempt: false,
              tags: '',
              last_order_name: null,
              currency: 'USD',
              phone: null,
              addresses: [
                {
                  id: 8715246895217,
                  customer_id: 7358220173425,
                  first_name: 'yodi',
                  last_name: 'waffles',
                  company: null,
                  address1: 'Yuma Proving Ground',
                  address2: 'suite 001',
                  city: 'Yuma Proving Ground',
                  province: 'Arizona',
                  country: 'United States',
                  zip: '85365',
                  phone: null,
                  name: 'yodi waffles',
                  province_code: 'AZ',
                  country_code: 'US',
                  country_name: 'United States',
                  default: false,
                },
              ],
              tax_exemptions: [],
              email_marketing_consent: {
                state: 'not_subscribed',
                opt_in_level: 'single_opt_in',
                consent_updated_at: null,
              },
              sms_marketing_consent: null,
              admin_graphql_api_id: 'gid://shopify/Customer/7358220173425',
              default_address: {
                id: 8715246862449,
                customer_id: 7358220173425,
                first_name: 'henry',
                last_name: 'waffles',
                company: null,
                address1: 'Yuimaru Kitchen',
                address2: '6',
                city: 'Johnson City',
                province: 'Tennessee',
                country: 'United States',
                zip: '37604',
                phone: null,
                name: 'henry waffles',
                province_code: 'TN',
                country_code: 'US',
                country_name: 'United States',
                default: true,
              },
              query_parameters: {
                topic: ['customers_update'],
                version: ['pixel'],
                writeKey: ['2mw9SN679HngnXXXHT4oSVVBVmb'],
              },
            },
            source: dummySourceConfig,
            query_parameters: {
              topic: ['carts_update'],
              writeKey: ['2mw9SN679HngnXXXHT4oSVVBVmb'],
              version: ['pixel'],
            },
          },
        ],
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              batch: [
                {
                  context: {
                    library: {
                      eventOrigin: 'server',
                      name: 'RudderStack Shopify Cloud',
                      version: '2.0.0',
                    },
                    integration: {
                      name: 'SHOPIFY',
                    },
                    topic: 'customers_update',
                    shopifyDetails: {
                      id: 7358220173425,
                      email: 'henry@wfls.com',
                      created_at: '2024-10-23T16:03:11-04:00',
                      updated_at: '2024-11-05T21:54:49-05:00',
                      first_name: 'yodi',
                      last_name: 'waffles',
                      orders_count: 0,
                      state: 'disabled',
                      total_spent: '0.00',
                      last_order_id: null,
                      note: null,
                      verified_email: true,
                      multipass_identifier: null,
                      tax_exempt: false,
                      tags: '',
                      last_order_name: null,
                      currency: 'USD',
                      phone: null,
                      addresses: [
                        {
                          id: 8715246895217,
                          customer_id: 7358220173425,
                          first_name: 'yodi',
                          last_name: 'waffles',
                          company: null,
                          address1: 'Yuma Proving Ground',
                          address2: 'suite 001',
                          city: 'Yuma Proving Ground',
                          province: 'Arizona',
                          country: 'United States',
                          zip: '85365',
                          phone: null,
                          name: 'yodi waffles',
                          province_code: 'AZ',
                          country_code: 'US',
                          country_name: 'United States',
                          default: false,
                        },
                      ],
                      tax_exemptions: [],
                      email_marketing_consent: {
                        state: 'not_subscribed',
                        opt_in_level: 'single_opt_in',
                        consent_updated_at: null,
                      },
                      sms_marketing_consent: null,
                      admin_graphql_api_id: 'gid://shopify/Customer/7358220173425',
                      default_address: {
                        id: 8715246862449,
                        customer_id: 7358220173425,
                        first_name: 'henry',
                        last_name: 'waffles',
                        company: null,
                        address1: 'Yuimaru Kitchen',
                        address2: '6',
                        city: 'Johnson City',
                        province: 'Tennessee',
                        country: 'United States',
                        zip: '37604',
                        phone: null,
                        name: 'henry waffles',
                        province_code: 'TN',
                        country_code: 'US',
                        country_name: 'United States',
                        default: true,
                      },
                    },
                  },
                  integrations: {
                    SHOPIFY: true,
                    DATA_WAREHOUSE: {
                      options: {
                        jsonPaths: ['identify.context.shopifyDetails'],
                      },
                    },
                  },
                  type: 'identify',
                  userId: '7358220173425',
                  traits: {
                    email: 'henry@wfls.com',
                    firstName: 'yodi',
                    lastName: 'waffles',
                    addressList: [
                      {
                        id: 8715246895217,
                        customer_id: 7358220173425,
                        first_name: 'yodi',
                        last_name: 'waffles',
                        company: null,
                        address1: 'Yuma Proving Ground',
                        address2: 'suite 001',
                        city: 'Yuma Proving Ground',
                        province: 'Arizona',
                        country: 'United States',
                        zip: '85365',
                        phone: null,
                        name: 'yodi waffles',
                        province_code: 'AZ',
                        country_code: 'US',
                        country_name: 'United States',
                        default: false,
                      },
                    ],
                    address: {
                      id: 8715246862449,
                      customer_id: 7358220173425,
                      first_name: 'henry',
                      last_name: 'waffles',
                      company: null,
                      address1: 'Yuimaru Kitchen',
                      address2: '6',
                      city: 'Johnson City',
                      province: 'Tennessee',
                      country: 'United States',
                      zip: '37604',
                      phone: null,
                      name: 'henry waffles',
                      province_code: 'TN',
                      country_code: 'US',
                      country_name: 'United States',
                      default: true,
                    },
                    orderCount: 0,
                    state: 'disabled',
                    totalSpent: '0.00',
                    verifiedEmail: true,
                    taxExempt: false,
                    tags: '',
                    currency: 'USD',
                    taxExemptions: [],
                    adminGraphqlApiId: 'gid://shopify/Customer/7358220173425',
                  },
                  timestamp: '2024-11-06T02:54:49.000Z',
                },
              ],
            },
          },
        ],
      },
    },
  },
].map((d3) => ({ ...d3, mockFns }));
