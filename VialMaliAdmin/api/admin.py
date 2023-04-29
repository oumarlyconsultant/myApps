from django.contrib import admin
from .models import Pays, Ville, Client, Devis, DevisArticle, Classe, Couleur, Dimension, Article, Nomenclature, Departement, Poste, Employe, TermesEmploi

# Register your models here.
admin.site.register(Pays)
admin.site.register(Ville)
admin.site.register(Client)
admin.site.register(Devis)
admin.site.register(DevisArticle)
admin.site.register(Classe)
admin.site.register(Couleur)
admin.site.register(Dimension)
admin.site.register(Article)
admin.site.register(Nomenclature)
admin.site.register(Departement)
admin.site.register(Poste)
admin.site.register(Employe)
admin.site.register(TermesEmploi)