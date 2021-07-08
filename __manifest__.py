# -*- coding: utf-8 -*-
{
    'name': "theme_penguin_apparels",

    'summary': """
        PA Website""",

    'description': """
        PenguinApparels Theme
    """,

    'author': "Shore Point System Private Limited",
    'website': "",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/odoo/addons/base/module/module_data.xml
    # for the full list
    'category': 'Theme',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base','website'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/assets.xml',
        'views/header.xml',
        'views/snippets.xml',
        'views/footer.xml',
        'views/content1.xml',
        'views/content2.xml',
        'views/content3.xml',
        'views/content4.xml',
        'views/content5.xml',
        'views/content6.xml',
        'views/content7.xml',
        'views/content8.xml',
        'views/content9.xml'
    ],
    # only loaded in demonstration mode
    'demo': [
    ],
}