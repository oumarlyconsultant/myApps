import os
# Configure settings for project
# Need to run this before calling models from application!
os.environ.setdefault('DJANGO_SETTINGS_MODULE','gestionVial.settings')

import django
# Import settings
django.setup()

import random
from gestionStock.models import Ville#Dimension

#Pays OK

import pandas as pd

def populate(file_name):
    df = pd.read_csv(file_name,sep=",",header=0)

    pk = df['pk'].to_list()

    pays_pk = df['pays_pk'].to_list()

    ville = df['ville'].to_list()

    lat = df['lat'].to_list()

    lon = df['lon'].to_list()

    for i in range(len(pk)):
        # dimension = Ville.objects.get_or_create(pk = pk[i], pays_id = pays_pk[i], ville = ville[i], lat = lat[i], lon = lon[i])[0]
        dimension = Ville.objects.filter(pk = pk[i]).update(ville = ville[i])


if __name__ == '__main__':
    print("Populating the database...Please Wait")
    populate('Files/Ville.csv')
    print('Populating Complete')


# import pandas as pd

# def populate(file_name):
#     df = pd.read_csv(file_name,sep=",",header=0)

#     largeur = df['largeur'].to_list()

#     hauteur = df['hauteur'].to_list()

#     for i in range(len(largeur)):
#         dimension = Dimension.objects.get_or_create(largeur=largeur[i],hauteur=hauteur[i])[0]

# if __name__ == '__main__':
#     print("Populating the database...Please Wait")
#     populate('Files/Dimension.csv')
#     print('Populating Complete')