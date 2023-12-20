export const networkCallsData = [
    {
        httpReq: {
            url: 'https://domain-rudder.myfreshworks.com/crm/sales/api/sales_accounts/upsert',
            method: 'POST'
        },
        httpRes: {
            data: {
                "sales_account": {
                    "id": 70003771396,
                    "name": "postman2.0",
                    "address": "Red Colony",
                    "city": "Pune",
                    "state": "Goa",
                    "zipcode": null,
                    "country": null,
                    "number_of_employees": 11,
                    "annual_revenue": 1000,
                    "website": null,
                    "owner_id": null,
                    "phone": "919191919191",
                    "open_deals_amount": null,
                    "open_deals_count": null,
                    "won_deals_amount": null,
                    "won_deals_count": null,
                    "last_contacted": null,
                    "last_contacted_mode": null,
                    "facebook": null,
                    "twitter": null,
                    "linkedin": null,
                    "links": {
                        "conversations": "/crm/sales/sales_accounts/70003771396/conversations/all?include=email_conversation_recipients%2Ctargetable%2Cphone_number%2Cphone_caller%2Cnote%2Cuser&per_page=3",
                        "document_associations": "/crm/sales/sales_accounts/70003771396/document_associations",
                        "notes": "/crm/sales/sales_accounts/70003771396/notes?include=creater",
                        "tasks": "/crm/sales/sales_accounts/70003771396/tasks?include=creater,owner,updater,targetable,users,task_type",
                        "appointments": "/crm/sales/sales_accounts/70003771396/appointments?include=creater,owner,updater,targetable,appointment_attendees,conference,note"
                    },
                    "custom_field": {},
                    "created_at": "2022-08-17T04:15:00-04:00",
                    "updated_at": "2022-08-24T06:03:31-04:00",
                    "avatar": null,
                    "parent_sales_account_id": null,
                    "recent_note": null,
                    "last_contacted_via_sales_activity": null,
                    "last_contacted_sales_activity_mode": null,
                    "completed_sales_sequences": null,
                    "active_sales_sequences": null,
                    "last_assigned_at": null,
                    "tags": [],
                    "is_deleted": false,
                    "team_user_ids": null,
                    "has_connections": false,
                    "record_type_id": "71010794477"
                }
            },
            status: 200
        },
    },
    {
        httpReq: {
            url: 'https://domain-rudder.myfreshworks.com/crm/sales/api/contacts/upsert?include=sales_accounts',
            method: 'POST'
        },
        httpRes: {
            data: {
                "contact": {
                    "id": 70042006456,
                    "first_name": "Rk",
                    "last_name": "Mishra",
                    "display_name": "Rk Mishra",
                    "avatar": null,
                    "job_title": null,
                    "city": null,
                    "state": null,
                    "zipcode": null,
                    "country": null,
                    "email": "testuser@google.com",
                    "emails": [
                        {
                            "id": 70037311213,
                            "value": "testuser@google.com",
                            "is_primary": true,
                            "label": null,
                            "_destroy": false
                        }
                    ],
                    "time_zone": "IST",
                    "work_number": "9988776655",
                    "mobile_number": "19265559504",
                    "address": null,
                    "last_seen": null,
                    "lead_score": 26,
                    "last_contacted": null,
                    "open_deals_amount": null,
                    "won_deals_amount": null,
                    "links": {
                        "conversations": "/crm/sales/contacts/70042006456/conversations/all?include=email_conversation_recipients%2Ctargetable%2Cphone_number%2Cphone_caller%2Cnote%2Cuser&per_page=3",
                        "timeline_feeds": "/crm/sales/contacts/70042006456/timeline_feeds",
                        "document_associations": "/crm/sales/contacts/70042006456/document_associations",
                        "notes": "/crm/sales/contacts/70042006456/notes?include=creater",
                        "tasks": "/crm/sales/contacts/70042006456/tasks?include=creater,owner,updater,targetable,users,task_type",
                        "appointments": "/crm/sales/contacts/70042006456/appointments?include=creater,owner,updater,targetable,appointment_attendees,conference,note",
                        "reminders": "/crm/sales/contacts/70042006456/reminders?include=creater,owner,updater,targetable",
                        "duplicates": "/crm/sales/contacts/70042006456/duplicates",
                        "connections": "/crm/sales/contacts/70042006456/connections"
                    },
                    "last_contacted_sales_activity_mode": null,
                    "custom_field": {},
                    "created_at": "2022-08-09T03:22:12-04:00",
                    "updated_at": "2022-08-30T00:33:27-04:00",
                    "keyword": "drilling",
                    "medium": "facebook",
                    "last_contacted_mode": null,
                    "recent_note": null,
                    "won_deals_count": null,
                    "last_contacted_via_sales_activity": null,
                    "completed_sales_sequences": null,
                    "active_sales_sequences": null,
                    "web_form_ids": null,
                    "open_deals_count": null,
                    "last_assigned_at": "2022-08-29T05:51:24-04:00",
                    "tags": [],
                    "facebook": null,
                    "twitter": null,
                    "linkedin": null,
                    "is_deleted": false,
                    "team_user_ids": null,
                    "external_id": "ea5cfab2-3961-4d8a-8187-3d1858c99099",
                    "work_email": null,
                    "subscription_status": 1,
                    "subscription_types": "2;3;4;5;1",
                    "customer_fit": 2,
                    "record_type_id": "71010794476",
                    "whatsapp_subscription_status": 2,
                    "sms_subscription_status": 2,
                    "last_seen_chat": null,
                    "first_seen_chat": null,
                    "locale": null,
                    "total_sessions": null,
                    "phone_numbers": [],
                    "sales_accounts": [
                        {
                            "partial": true,
                            "id": 70003771198,
                            "name": "div-quer",
                            "avatar": null,
                            "website": null,
                            "last_contacted": null,
                            "record_type_id": "71010794477",
                            "is_primary": true
                        },
                        {
                            "partial": true,
                            "id": 70003825177,
                            "name": "BisleriGroup",
                            "avatar": null,
                            "website": null,
                            "last_contacted": null,
                            "record_type_id": "71010794477",
                            "is_primary": false
                        }
                    ]
                }
            },
            status: 200
        },
    },
    {
        httpReq: {
            url: 'https://domain-rudder.myfreshworks.com/crm/sales/api/selector/sales_activity_types',
            method: 'GET'
        },
        httpRes: {
            data: {
                "sales_activity_types": [
                    {
                        "partial": true,
                        "id": 70000666879,
                        "name": "own-calender",
                        "internal_name": "cappointment",
                        "show_in_conversation": true,
                        "position": 1,
                        "is_default": false,
                        "is_checkedin": false
                    },
                    {
                        "partial": true,
                        "id": 70000663932,
                        "name": "fb-support",
                        "internal_name": "facebook",
                        "show_in_conversation": true,
                        "position": 2,
                        "is_default": false,
                        "is_checkedin": false
                    },
                    {
                        "partial": true,
                        "id": 70000663746,
                        "name": "twitter sales",
                        "internal_name": "twitter",
                        "show_in_conversation": true,
                        "position": 3,
                        "is_default": false,
                        "is_checkedin": false
                    },
                    {
                        "partial": true,
                        "id": 70000646396,
                        "name": "linked sales",
                        "internal_name": "linkedin",
                        "show_in_conversation": true,
                        "position": 4,
                        "is_default": false,
                        "is_checkedin": false
                    },
                    {
                        "partial": true,
                        "id": 70000642330,
                        "name": "facebook sales",
                        "internal_name": "facebook",
                        "show_in_conversation": true,
                        "position": 5,
                        "is_default": false,
                        "is_checkedin": false
                    },
                    {
                        "partial": true,
                        "id": 70000612897,
                        "name": "Chat",
                        "internal_name": "chat",
                        "show_in_conversation": true,
                        "position": 6,
                        "is_default": true,
                        "is_checkedin": false
                    },
                    {
                        "partial": true,
                        "id": 70000612898,
                        "name": "Phone",
                        "internal_name": "phone",
                        "show_in_conversation": true,
                        "position": 7,
                        "is_default": true,
                        "is_checkedin": false
                    },
                    {
                        "partial": true,
                        "id": 70000612899,
                        "name": "Meeting",
                        "internal_name": "appointment",
                        "show_in_conversation": true,
                        "position": 8,
                        "is_default": true,
                        "is_checkedin": true
                    },
                    {
                        "partial": true,
                        "id": 70000612900,
                        "name": "Task",
                        "internal_name": "task",
                        "show_in_conversation": true,
                        "position": 9,
                        "is_default": true,
                        "is_checkedin": false
                    },
                    {
                        "partial": true,
                        "id": 70000612901,
                        "name": "Email",
                        "internal_name": "email",
                        "show_in_conversation": true,
                        "position": 10,
                        "is_default": true,
                        "is_checkedin": false
                    },
                    {
                        "partial": true,
                        "id": 70000612902,
                        "name": "SMS Outgoing",
                        "internal_name": "sms_outgoing",
                        "show_in_conversation": true,
                        "position": 11,
                        "is_default": true,
                        "is_checkedin": false
                    },
                    {
                        "partial": true,
                        "id": 70000612903,
                        "name": "Reminder",
                        "internal_name": "reminder",
                        "show_in_conversation": false,
                        "position": 12,
                        "is_default": true,
                        "is_checkedin": false
                    },
                    {
                        "partial": true,
                        "id": 70000612904,
                        "name": "SMS Incoming",
                        "internal_name": "sms_incoming",
                        "show_in_conversation": true,
                        "position": 13,
                        "is_default": true,
                        "is_checkedin": false
                    }
                ]
            },
            status: 200
        },
    },
    {
        httpReq: {
            url: 'https://domain-rudder.myfreshworks.com/crm/sales/api/contacts/upsert',
            method: 'POST'
        },
        httpRes: {
            data: {
                "contact": {
                    "id": 70054866612,
                    "first_name": null,
                    "last_name": null,
                    "display_name": "jamessampleton120@gmail.com",
                    "avatar": null,
                    "job_title": null,
                    "city": null,
                    "state": null,
                    "zipcode": null,
                    "country": null,
                    "email": "jamessampleton120@gmail.com",
                    "emails": [
                        {
                            "id": 70047409219,
                            "value": "jamessampleton120@gmail.com",
                            "is_primary": true,
                            "label": null,
                            "_destroy": false
                        }
                    ],
                    "time_zone": null,
                    "work_number": null,
                    "mobile_number": null,
                    "address": null,
                    "last_seen": null,
                    "lead_score": 0,
                    "last_contacted": null,
                    "open_deals_amount": null,
                    "won_deals_amount": null,
                    "links": {
                        "conversations": "/crm/sales/contacts/70054866612/conversations/all?include=email_conversation_recipients%2Ctargetable%2Cphone_number%2Cphone_caller%2Cnote%2Cuser&per_page=3",
                        "timeline_feeds": "/crm/sales/contacts/70054866612/timeline_feeds",
                        "document_associations": "/crm/sales/contacts/70054866612/document_associations",
                        "notes": "/crm/sales/contacts/70054866612/notes?include=creater",
                        "tasks": "/crm/sales/contacts/70054866612/tasks?include=creater,owner,updater,targetable,users,task_type",
                        "appointments": "/crm/sales/contacts/70054866612/appointments?include=creater,owner,updater,targetable,appointment_attendees,conference,note",
                        "reminders": "/crm/sales/contacts/70054866612/reminders?include=creater,owner,updater,targetable",
                        "duplicates": "/crm/sales/contacts/70054866612/duplicates",
                        "connections": "/crm/sales/contacts/70054866612/connections"
                    },
                    "last_contacted_sales_activity_mode": null,
                    "custom_field": {},
                    "created_at": "2022-10-11T08:42:15-04:00",
                    "updated_at": "2022-10-11T08:42:15-04:00",
                    "keyword": null,
                    "medium": null,
                    "last_contacted_mode": null,
                    "recent_note": null,
                    "won_deals_count": null,
                    "last_contacted_via_sales_activity": null,
                    "completed_sales_sequences": null,
                    "active_sales_sequences": null,
                    "web_form_ids": null,
                    "open_deals_count": null,
                    "last_assigned_at": null,
                    "tags": [],
                    "facebook": null,
                    "twitter": null,
                    "linkedin": null,
                    "is_deleted": false,
                    "team_user_ids": null,
                    "external_id": null,
                    "work_email": null,
                    "subscription_status": 1,
                    "subscription_types": "2;3;4;5;1",
                    "customer_fit": 0,
                    "record_type_id": "71012139284",
                    "whatsapp_subscription_status": 2,
                    "sms_subscription_status": 2,
                    "last_seen_chat": null,
                    "first_seen_chat": null,
                    "locale": null,
                    "total_sessions": null,
                    "phone_numbers": []
                }
            },
            status: 200
        },
    },
    {
        httpReq: {
            url: 'https://domain-rudder.myfreshworks.com/crm/sales/api/lists',
            method: 'GET'
        },
        httpRes: {
            data: {
                "lists": [
                    {
                        "id": 70000053624,
                        "name": "Sample list"
                    },
                    {
                        "id": 70000056575,
                        "name": "list1-test"
                    },
                    {
                        "id": 70000058627,
                        "name": "Jio 5G Group"
                    },
                    {
                        "id": 70000058628,
                        "name": "Airtel 5G Group"
                    },
                    {
                        "id": 70000059716,
                        "name": "Voda 5G"
                    }
                ],
                "meta": {
                    "total_pages": 1,
                    "total": 5
                }
            },
            status: 200
        },
    },
    {
        httpReq: {
            url: 'https://domain-rudder.myfreshworks.com/crm/sales/api/selector/lifecycle_stages',
            method: 'GET'
        },
        httpRes: {
            data: {
                "lifecycle_stages": [
                    {
                        "id": 71012139274,
                        "name": "Sales Qualified Lead start",
                        "position": 1,
                        "disabled": false,
                        "default": true,
                        "type": "Sales Qualified Lead",
                        "contact_status_ids": [70000697858, 70000697859, 70000697860]
                    },
                    {
                        "id": 71012139273,
                        "name": "Lead",
                        "position": 2,
                        "disabled": false,
                        "default": true,
                        "type": "Lead",
                        "contact_status_ids": [70000697854, 70000697855, 70000697856, 70000697857]
                    },
                    {
                        "id": 71012806409,
                        "name": "final Customer",
                        "position": 3,
                        "disabled": false,
                        "default": false,
                        "type": "Custom",
                        "contact_status_ids": [70000736543, 70000736544]
                    },
                    {
                        "id": 71012139275,
                        "name": "Customer",
                        "position": 4,
                        "disabled": false,
                        "default": true,
                        "type": "Customer",
                        "contact_status_ids": [70000697861, 70000697862]
                    }
                ]
            },
            status: 200
        },
    }
];