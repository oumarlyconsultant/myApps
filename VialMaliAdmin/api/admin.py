from django.contrib import admin
from .models import Pays, Ville, Client, Devis, DevisArticle, Classe, Couleur, Dimension, Article, Nomenclature, Departement, Poste, Employe, TermesEmploi

# Register your models here.
admin.register(Pays)
admin.register(Ville)
admin.register(Client)
admin.register(Devis)
admin.register(DevisArticle)
admin.register(Classe)
admin.register(Couleur)
admin.register(Dimension)
admin.register(Article)
admin.register(Nomenclature)
admin.register(Departement)
admin.register(Poste)
admin.register(Employe)
admin.register(TermesEmploi)