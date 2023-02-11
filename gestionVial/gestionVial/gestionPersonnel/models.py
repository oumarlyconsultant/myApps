from django.db import models
from django.utils import timezone
from django.urls import reverse

# Create the post model
class Departement(models.Model):
    nom = models.CharField(max_length=100,blank=False,null=False)

    def __str__(self):
        return self.nom

class Poste(models.Model):
    departement = models.ForeignKey(Departement, on_delete=models.CASCADE)
    nom = models.CharField(max_length=100,blank=False,null=False)
    categorie = models.CharField(max_length=100,blank=False,null=False)
    niveau = models.IntegerField()
    employePoste = models.ManyToManyField(Employe, through='EmployePoste')

    def __str__(self):
        return self.nom

class Employe(models.Model):
    # administrateur = models.ForeignKey('auth.User',on_delete=models.CASCADE)   
    numeroEmploye = models.AutoField(primary_key=True)
    prenom = models.CharField(max_length=50)
    nom = models.CharField(max_length=50)
    dateNaissance = models.DateField(blank=False,null=False)
    sexe = models.CharField(max_length=1,blank=False,null=False,choices=(('H','HOMME'),('F','FEMME')))
    adresseDom = models.CharField(max_length=100,blank=True,null=True)
    ville = models.CharField(max_length=50,blank=True,null=True,default='Bamako')
    pays = models.CharField(max_length=50,blank=True,null=True,default='Mali')

    dateAjout = models.DateTimeField(default=timezone.now())

    def get_absolute_url(self): #go back to this post
        return reverse("employe_detail",kwargs={'pk':self.pk})

    def __str__(self):
        return (self.prenom+" "+self.nom)

class EmployePoste(models.Model):
    employe = models.ForeignKey(Departement, on_delete=models.CASCADE)
    poste = models.ForeignKey(Poste, on_delete=models.CASCADE)
    dateDebut = models.DateField(blank=False,null=False,default='1991-01-01')
    dateFin = models.DateField(blank=False,null=False,default='9999-12-31')

class TermEmploi(models.Model):
    employe = models.ForeignKey(Employe, on_delete=models.CASCADE)
    dateDebut = models.DateField(blank=False,null=False)
    dateFin = models.DateField(blank=False,null=False,default='9999-12-31')
    raisonFin = models.CharField(max_length=100,default='N/A')

    def __str__(self):
        return self.dateDebut

class TermPaie(models.Model):
    employe = models.ForeignKey(Employe, on_delete=models.CASCADE)
    montant = models.FloatField(blank=False,null=False,default=0)
    bonus = models.FloatField(blank=False,null=False,default=0)
    dateDebut = models.DateField(null=False,blank=False,default='1991-01-01')
    dateFin = models.DateField(null=False,blank=False,default='9999-12-31')

    def __str__(self):
        return self.montant