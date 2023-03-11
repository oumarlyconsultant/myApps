import os
# Configure settings for project
# Need to run this before calling models from application!
os.environ.setdefault('DJANGO_SETTINGS_MODULE','gestionVial.settings')

import django
# Import settings
django.setup()

import random
from gestionStock.models import ClasseMat, CategorieMat, Couleur, Materiel

#Pays OK

import pandas as pd
import numpy as np

# def populate_classeMat(file_name):
#     df = pd.read_csv(file_name,sep=",",header=0)

#     pk = df['pk'].to_list()

#     classe = df['classe'].to_list()

#     for i in range(len(pk)):
#         obj = ClasseMat.objects.get_or_create(pk = pk[i], classe = classe[i])[0]

# def populate_categorieMat(file_name):
#     df = pd.read_csv(file_name,sep=",",header=0)

#     pk = df['pk'].to_list()

#     classe_pk = df['classe_pk'].to_list()

#     categorie = df['categorie'].to_list()

#     for i in range(len(pk)):
#         obj = CategorieMat.objects.get_or_create(pk = pk[i], classe_id = classe_pk[i], categorie = categorie[i])[0]

# def populate_couleur(file_name):
#     df = pd.read_csv(file_name,sep=",",header=0)

#     pk = df['pk'].to_list()

#     couleur = df['couleur'].to_list()

#     for i in range(len(pk)):
#         # dimension = Ville.objects.get_or_create(pk = pk[i], pays_id = pays_pk[i], ville = ville[i], lat = lat[i], lon = lon[i])[0]
#         obj = Couleur.objects.get_or_create(pk = pk[i], couleur = couleur[i])[0]

def populate_materiel(file_name):
    df = pd.read_csv(file_name,sep=",",header=0)

    pk = df['pk'].to_list()

    categorieMat = df['categorieMat_pk'].to_list()

    reference = df['reference'].to_list()

    designation = df['designation'].to_list()

    uniteDeMesure = df['uniteDeMesure'].to_list()

    uniteDeQuantification = df['uniteDeQuantification'].to_list()

    cout = df['cout'].to_list()

    prix = df['prix'].to_list()

    for i in range(len(pk)):
        # dimension = Ville.objects.get_or_create(pk = pk[i], pays_id = pays_pk[i], ville = ville[i], lat = lat[i], lon = lon[i])[0]
        obj = Materiel.objects.get_or_create(pk = pk[i], categorieMat_id = categorieMat[i], reference = reference[i], designation = designation[i], uniteDeMesure = uniteDeMesure[i], 
        uniteDeQuantification = uniteDeQuantification[i], cout = cout[i], prix = prix[i])[0]


if __name__ == '__main__':
    # print("Populating the database...Please Wait")
    # print('...classeMat')
    # populate_classeMat('Files/ClasseMat.csv')
    # print('...categorieMat')
    # populate_categorieMat('Files/CategorieMat.csv')
    # print('...couleur')
    # populate_couleur('Files/Couleur.csv')
    print('...materiel')
    populate_materiel('Files/Materiel.csv')
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