import os
# Configure settings for project
# Need to run this before calling models from application!
os.environ.setdefault('DJANGO_SETTINGS_MODULE','gestionVial.settings')

import django
# Import settings
django.setup()

import random
from gestionStock.models import ClasseMat, ClasseProd, Couleur, Dimension, Materiel, Produit, CoutPrixMat

#Pays OK

import pandas as pd

def populate_classeMat(file_name):
    df = pd.read_csv(file_name,sep=",",header=0)

    pk = df['pk'].to_list()

    classe = df['classe'].to_list()

    info = df['info'].to_list()

    for i in range(len(pk)):
        obj = ClasseMat.objects.get_or_create(pk = pk[i], classe = classe[i], info = info[i])[0]

def populate_classeProd(file_name):
    df = pd.read_csv(file_name,sep=",",header=0)

    pk = df['pk'].to_list()

    classe = df['classe'].to_list()

    info = df['info'].to_list()

    for i in range(len(pk)):
        obj = ClasseProd.objects.get_or_create(pk = pk[i], classe = classe[i], info = info[i])[0]

def populate_dimension(file_name):
    df = pd.read_csv(file_name,sep=",",header=0)

    pk = df['pk'].to_list()

    largeur = df['largeur'].to_list()

    hauteur = df['hauteur'].to_list()

    profondeur = df['profondeur'].to_list()

    info = df['info'].to_list()

    for i in range(len(pk)):
        dimension = Dimension.objects.get_or_create(pk = pk[i], largeur=largeur[i], hauteur=hauteur[i], profondeur=profondeur[i], info=info[i])[0]


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

    classe = df['classe_pk'].to_list()

    couleur = df['couleur_pk'].to_list()
    # fournisseur = df['fournisseur_pk'].to_list()

    reference = df['reference'].to_list()

    designation = df['designation'].to_list()

    uniteDeQuantification = df['uniteDeQuantification'].to_list()

    # cout = df['cout'].to_list()

    # prix = df['prix'].to_list()

    fabriquant = df['fabriquant'].to_list()

    info = df['info'].to_list()

    for i in range(len(pk)):
        # dimension = Ville.objects.get_or_create(pk = pk[i], pays_id = pays_pk[i], ville = ville[i], lat = lat[i], lon = lon[i])[0]
        obj = Materiel.objects.get_or_create(pk = pk[i], classe_id = classe[i], couleur_id = couleur[i], reference = reference[i], designation = designation[i],
        uniteDeQuantification = uniteDeQuantification[i], fabriquant=fabriquant[i], info=info[i])[0]

def populate_produit(file_name):
    df = pd.read_csv(file_name,sep=",",header=0)

    pk = df['pk'].to_list()

    classe = df['classe_pk'].to_list()

    dimension = df['dimension_pk'].to_list()

    couleur = df['couleur_pk'].to_list()
    
    reference = df['reference'].to_list()

    designation = df['designation'].to_list()

    uniteDeQuantification = df['uniteDeQuantification'].to_list()

    # cout = df['cout'].to_list()

    # prix = df['prix'].to_list()

    info = df['info'].to_list()

    for i in range(len(pk)):
        # dimension = Ville.objects.get_or_create(pk = pk[i], pays_id = pays_pk[i], ville = ville[i], lat = lat[i], lon = lon[i])[0]
        obj = Produit.objects.get_or_create(pk = pk[i], classe_id = classe[i], dimension_id=dimension[i], couleur_id = couleur[i], reference = reference[i], designation = designation[i],
        uniteDeQuantification = uniteDeQuantification[i], info=info[i])[0]


def populate_coutPrixMat(file_name):
    df = pd.read_csv(file_name,sep=",",header=0)

    pk = df['pk'].to_list()

    materiel = df['materiel_pk'].to_list()

    # couleur = df['couleur_pk'].to_list()
    # fournisseur = df['fournisseur_pk'].to_list()

    prixRevient = df['prixRevient'].to_list()

    prixVente = df['prixVente'].to_list()

    date = df['date'].to_list()

    info = df['info'].to_list()

    for i in range(len(pk)):
        # dimension = Ville.objects.get_or_create(pk = pk[i], pays_id = pays_pk[i], ville = ville[i], lat = lat[i], lon = lon[i])[0]
        obj = CoutPrixMat.objects.get_or_create(pk = pk[i], materiel_id = materiel[i], prixRevient = prixRevient[i], prixVente = prixVente[i],
        date = date[i], info=info[i])[0]


if __name__ == '__main__':
    print("Populating the database...Please Wait")
    print('...classeMat')
    populate_classeMat('Files/ClasseMat.csv')
    print('...classeProd')
    populate_classeProd('Files/ClasseProd.csv')
    print('...dimension')
    populate_dimension('Files/Dimension.csv')
    print('...materiel')
    populate_materiel('Files/Materiel.csv')
    print('...produit')
    populate_produit('Files/Produit.csv')    
    print('...coutPrixMat')
    populate_coutPrixMat('Files/CoutPrixMat.csv')  
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