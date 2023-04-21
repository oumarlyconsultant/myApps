from rest_framework import serializers
from .models import Proprietaire, Terrain, DateDim, trancheHoraire, Calendrier, Disponibilite, Client, Reservation

class ProprietaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proprietaire
        fields = ('nC', 'prenom', 'nom', 'dateNaissance','sexe','adresseDom','ville','quartier','commune','numeroTel1','numeroTel2','email','profession','indCompteValide','dateCreation','dateMisAJour')

class TerrainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Terrain
        fields = ('proprietaire', 'nom', 'nom','adresse','ville','quartier','commune','latitude','longitude','largeur','longueur','nombreUnitesMin','nombreUnitesMax','prixUnite','methodePaiment1','methodePaiment2','type','indStanding','photo1','photo2','photo3','photo4','photo5','indTerrainValide','dateCreation','dateMisAJour')

class DateDimSerializer(serializers.ModelSerializer):
    class Meta:
        model = DateDim
        fields = ('date', 'semaineDebutDate', 'semaineFinDate', 'jourNumeroSemaine','jourSemaine','moisDebutDate','moisFinDate','indWeekend')

class trancheHoraireSerializer(serializers.ModelSerializer):
    class Meta:
        model = trancheHoraire
        fields = ('debut', 'fin', 'indMatin', 'indApresMidi','indSoiree')

class CalendrierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calendrier
        fields = ('date', 'tranche')

class DisponibiliteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disponibilite
        fields = ('terrain', 'calendrier', 'indDisponible')

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('nC', 'prenom', 'nom', 'dateNaissance','sexe','numeroTel1','numeroTel2','email','indAvecCompte','dateCreation','dateMisAJour')


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = ('id', 'title', 'description', 'completed')