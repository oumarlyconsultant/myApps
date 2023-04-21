from django.db import models
import uuid

# Create your models here.
class Proprietaire(models.Model):
    nC = models.UUIDField(primary_key = True, default=uuid.uuid4,editable=False)
    prenom = models.CharField(max_length=50)
    nom = models.CharField(max_length=50)
    dateNaissance = models.DateField()
    sexe = models.CharField(max_length=1,choices=(('H','HOMME'),('F','FEMME')),default='H')
    adresseDom = models.CharField(max_length=50)    
    ville = models.CharField(max_length=50,default='Bamako')
    quartier = models.CharField(max_length=50,default='Faladie')
    commune = models.IntegerField(default=6,blank=True,null=True)
    numeroTel1 = models.CharField(max_length=20)
    numeroTel2 = models.CharField(max_length=20,blank=True,null=True)
    email = models.EmailField()
    profession = models.CharField(max_length=50)
    indCompteValide = models.BooleanField(default=False)
    dateCreation = models.DateTimeField(auto_now_add=True)
    dateMisAJour = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.prenom+" "+self.nom
    
class Terrain(models.Model):
    proprietaire = models.ForeignKey(Proprietaire,on_delete=models.CASCADE)
    nom = models.CharField(max_length=50)
    adresse = models.CharField(max_length=50)    
    ville = models.CharField(max_length=50,default='Bamako')
    quartier = models.CharField(max_length=50,default='Faladie')
    commune = models.IntegerField(default=6,blank=True,null=True)
    latitude = models.DecimalField(max_digits=22,decimal_places=16)
    longitude = models.DecimalField(max_digits=22,decimal_places=16)
    largeur = models.FloatField()
    longueur = models.FloatField()
    nombreUnitesMin = models.IntegerField()
    nombreUnitesMax = models.IntegerField()
    prixUnite = models.FloatField()
    methodePaiment1 = models.CharField(max_length=1,choices=(('C','COMPTANT'),('O','ORANGE MONEY')),default='C')
    methodePaiment2 = models.CharField(max_length=1,blank=True,null=True,choices=(('C','COMPTANT'),('O','ORANGE MONEY')))
    type = models.CharField(max_length=2,choices=(('GR','GRAVIER'),('GA','GAZON'),('SY','SYNTHETIQUE'),('SA','SABLE')),default='GR')
    indStanding = models.BooleanField(default=False)
    photo1 = models.ImageField(upload_to="terrains/",blank=True,null=True) #Change After
    photo2 = models.ImageField(upload_to="terrains/",blank=True,null=True)
    photo3 = models.ImageField(upload_to="terrains/",blank=True,null=True)
    photo4 = models.ImageField(upload_to="terrains/",blank=True,null=True)
    photo5 = models.ImageField(upload_to="terrains/",blank=True,null=True)
    indTerrainValide = models.BooleanField(default=False)
    dateCreation = models.DateTimeField(auto_now_add=True)
    dateMisAJour = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nom 
    
class DateDim(models.Model):
    date = models.DateField()
    semaineDebutDate = models.DateField()
    semaineFinDate = models.DateField()    
    jourNumeroSemaine = models.IntegerField()
    jourSemaine = models.CharField(max_length=20)
    moisDebutDate = models.DateField()
    moisFinDate = models.DateField()
    indWeekend = models.BooleanField(default=False)

    def __str__(self):
        return str(self.date)

class trancheHoraire(models.Model):
    debut = models.TimeField()
    fin = models.TimeField()
    indMatin = models.BooleanField(default=True)
    indApresMidi = models.BooleanField(default=False)
    indSoiree = models.BooleanField(default=False)

    def __str__(self):
        return str(self.debut)+" "+str(self.fin)

class Calendrier(models.Model):
    date = models.ForeignKey(DateDim,on_delete=models.CASCADE)
    tranche = models.ForeignKey(trancheHoraire,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.date)+" "+str(self.tranche)

class Disponibilite(models.Model):
    terrain = models.ForeignKey(Terrain,on_delete=models.CASCADE)
    calendrier = models.ForeignKey(Calendrier,on_delete=models.CASCADE)
    indDisponible = models.BooleanField(default=True)

    def __str__(self):
        return str(self.calendrier)+" "+str(self.indDisponible)

class Client(models.Model):
    nC = models.UUIDField(primary_key = True, default=uuid.uuid4,editable=False)
    prenom = models.CharField(max_length=50)
    nom = models.CharField(max_length=50)
    dateNaissance = models.DateField(blank=True,null=True)
    sexe = models.CharField(max_length=1,choices=(('H','HOMME'),('F','FEMME')),default='H')
    numeroTel1 = models.CharField(max_length=20)
    numeroTel2 = models.CharField(max_length=20,blank=True,null=True)
    email = models.EmailField(blank=True,null=True)
    indAvecCompte = models.BooleanField(default=False)
    dateCreation = models.DateTimeField(auto_now_add=True)
    dateMisAJour = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.prenom+" "+self.nom   
        
class Reservation(models.Model):
    disponibilite = models.ForeignKey(Disponibilite,on_delete=models.CASCADE)
    client = models.ForeignKey(Client,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.disponibilite.calendrier)+" "+str(self.client)

