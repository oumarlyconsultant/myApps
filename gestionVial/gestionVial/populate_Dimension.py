import os
# Configure settings for project
# Need to run this before calling models from application!
os.environ.setdefault('DJANGO_SETTINGS_MODULE','gestionVial.settings')

import django
# Import settings
django.setup()

import random
from gestionStock.models import Dimension

import pandas as pd

def populate(file_name):
    df = pd.read_csv(file_name,sep=",",header=0)

    largeur = df['largeur'].to_list()

    hauteur = df['hauteur'].to_list()

    for i in range(len(largeur)):
        dimension = Dimension.objects.get_or_create(largeur=largeur[i],hauteur=hauteur[i])[0]

if __name__ == '__main__':
    print("Populating the database...Please Wait")
    populate('Files/Dimension.csv')
    print('Populating Complete')