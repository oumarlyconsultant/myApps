from rest_framework import serializers
from .models import Pays, Ville, Client, Devis, DevisArticle, Classe, Couleur, Dimension, Article, Nomenclature, Departement, Poste, Employe, TermesEmploi

####################### Commun
class PaysSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pays
        fields = ('id','pays','abbrev')

class VilleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ville
        fields = ('id','ville','lat','lon','pays')


####################### Ventes
class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('id','prenom','nom','nomEntreprise','adresse','telephone','email','info','ville','pays')

class DevisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Devis
        fields = ('id','date','remise','client','responsable','agentCommercial','article')

class DevisArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = DevisArticle
        fields = ('id','quantite','devis','article')


####################### Inventaires_et_stock
class ClasseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classe
        fields = ('id','classe','info')

class CouleurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Couleur
        fields = ('id','couleur','code','info')

class DimensionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dimension
        fields = ('id','largeur','hauteur','epaisseur','volume')

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id','reference','designation','uniteDeMesure','uniteDeQuantification','prixDeRevient','prixDeVente','fabriquant','indArticleFab','info','classe','couleur','dimension','articleFabrique')

class NomenclatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nomenclature
        fields = ('id','produitFini','produitBrut','qtiteArticleBrutReq')

####################### Personnel
class DepartementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departement
        fields = ('id','nom','departementParent')

class PosteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poste
        fields = ('id','nom','niveau')

class EmployeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employe
        fields = ('id','numeroEmploye','prenom','nom','dateNaissance','sexe','adresseDomicile','telephone','email','ville','poste','departement','responsable')

class TermesEmploiSerializer(serializers.ModelSerializer):
    class Meta:
        model = TermesEmploi
        fields = ('employe','dateEmbauche','dateFinEmploi','raisonFinEmploi','raisonFinDetails','typeEmploi','salaire','bonus','dateMisAJour')
