from django.shortcuts import render
from rest_framework import viewsets
from .models import Proprietaire, Terrain, DateDim, trancheHoraire, Calendrier, Disponibilite, Client, Reservation
from .serializers import ProprietaireSerializer, TerrainSerializer, DateDimSerializer, trancheHoraireSerializer, CalendrierSerializer, DisponibiliteSerializer, ClientSerializer, ReservationSerializer

# Create your views here.

class ProprietaireView(viewsets.ModelViewSet):
    serializer_class = ProprietaireSerializer
    queryset = Proprietaire.objects.all()