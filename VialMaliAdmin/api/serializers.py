from rest_framework import serializers
from .models import Pays, Ville, Client, Devis, DevisArticle, Classe, Couleur, Dimension, Article, Nomenclature, Departement, Poste, Employe, TermesEmploi

####################### Commun
class PaysSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pays
        fields = ('pays','abbrev')

class VilleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ville
        fields = ('ville','lat','lon','pays')


####################### Ventes
class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('prenom','nom','nomEntreprise','adresse','telephone','email','info','ville','pays')

class DevisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Devis
        fields = ('date','remise','client','responsable','agentCommercial','article')

class DevisArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = DevisArticle
        fields = ('quantite','devis','article')


####################### Inventaires_et_stock
class ClasseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classe
        fields = ('classe','info')

class CouleurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Couleur
        fields = ('couleur','code','info')

class DimensionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dimension
        fields = ('largeur','hauteur','epaisseur','volume')

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('reference','designation','uniteDeMesure','uniteDeQuantification','prixDeRevient','prixDeVente','fabriquant','indArticleFab','info','classe','couleur','dimension','articleFabrique')


####################### Personnel
class DepartementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departement
        fields = ('nom','departementParent')

class PosteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poste
        fields = ('nom','niveau')

class EmployeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employe
        fields = ('numeroEmploye','prenom','nom','dateNaissance','sexe','adresseDomicile','telephone','email','ville','pays','poste','departement','responsable')

class TermesEmploiSerializer(serializers.ModelSerializer):
    class Meta:
        model = TermesEmploi
        fields = ('employe','dateEmbauche','dateFinEmploi','raisonFinEmploi','raisonFinDetails','typeEmploi','salaire','bonus','dateMisAJour')
