from django.db import models
from django.utils import timezone
from django.urls import reverse
import uuid

# Create the post model
class Departement(models.Model):
    nom = models.CharField(max_length=100,blank=False,null=False)
    depParent = models.ForeignKey('self',null=True,blank=True,on_delete=models.RESTRICT)

    def __str__(self):
        return self.nom

class Employe(models.Model):
    # administrateur = models.ForeignKey('auth.User',on_delete=models.CASCADE)   
    numeroEmploye = models.UUIDField(primary_key = True, default=uuid.uuid4,editable=False)
    prenom = models.CharField(max_length=50)
    nom = models.CharField(max_length=50)
    dateNaissance = models.DateField(blank=False,null=False)
    sexe = models.CharField(max_length=1,blank=False,null=False,choices=(('H','HOMME'),('F','FEMME')))
    adresseDom = models.CharField(max_length=100,blank=True,null=True)
    ville = models.CharField(max_length=50,blank=True,null=True,default='Bamako')
    pays = models.CharField(max_length=50,blank=True,null=True,default='Mali')
    responsable = models.ForeignKey('self',null=True,blank=True,on_delete=models.RESTRICT)

    dateAjout = models.DateTimeField(default=timezone.now())

    def get_absolute_url(self): #go back to this post
        # return reverse("gestionPersonnel:details",kwargs={'pk':self.numeroEmploye})
        return reverse("gestionPersonnel:details",kwargs={'pk':self.numeroEmploye})

    def __str__(self):
        return (self.prenom+" "+self.nom)

class Poste(models.Model):
    departement = models.ForeignKey(Departement, on_delete=models.RESTRICT)
    nom = models.CharField(max_length=100,blank=False,null=False)
    categorie = models.CharField(max_length=100,blank=False,null=False)
    niveau = models.IntegerField()
    employePoste = models.ManyToManyField(Employe, through='EmployePoste')

    def __str__(self):
        return self.nom

class EmployePoste(models.Model):
    employe = models.ForeignKey(Employe, on_delete=models.CASCADE)
    poste = models.ForeignKey(Poste, on_delete=models.RESTRICT)
    dateDebut = models.DateField(blank=False,null=False,default='1991-01-01')
    dateFin = models.DateField(blank=False,null=False,default='9999-12-31')

# class EmployeResponsable(models.Model):
#     employe = models.ForeignKey(Employe, on_delete=models.CASCADE)
#     responsable = models.ForeignKey(Employe, on_delete=models.CASCADE)
#     dateDebut = models.DateField(blank=False,null=False,default='1991-01-01')
#     dateFin = models.DateField(blank=False,null=False,default='9999-12-31')

class TermEmploi(models.Model):
    employe = models.ForeignKey(Employe, on_delete=models.CASCADE)
    type =  models.CharField(max_length=1,blank=False,null=False,choices=(('P','Permanent'),('C','Contractuel')),default='P')
    dateDebut = models.DateField(blank=False,null=False)
    dateFin = models.DateField(blank=False,null=False,default='9999-12-31')
    raisonFin = models.CharField(max_length=100,default='Termes actuels')

    def __str__(self):
        return (self.employe.prenom+" "+self.employe.nom) +" - status actuel: "+self.raisonFin
        ## Change to reflect time period (ie. date d'embauche en date de x)

class TermPaie(models.Model):
    employe = models.ForeignKey(Employe, on_delete=models.CASCADE)
    montant = models.FloatField(blank=False,null=False,default=0)
    bonus = models.FloatField(blank=False,null=False,default=0)
    dateDebut = models.DateField(null=False,blank=False,default='1991-01-01') #has to be min hiring date
    dateFin = models.DateField(null=False,blank=False,default='9999-12-31')
    raisonPaie = models.CharField(max_length=500,default='Termes actuels')

    def __str__(self):
        return (self.employe.prenom+" "+self.employe.nom) +" - salaire actuel: "+str(self.montant)+" Fcfa"
        ## Change to reflect time period (ie. Salaire en date de x)