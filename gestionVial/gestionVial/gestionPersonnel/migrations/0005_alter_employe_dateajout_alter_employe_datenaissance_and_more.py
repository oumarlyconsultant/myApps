# Generated by Django 4.1.6 on 2023-02-05 22:18

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gestionPersonnel', '0004_alter_employe_dateajout_alter_employe_nom_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employe',
            name='dateAjout',
            field=models.DateTimeField(default=datetime.datetime(2023, 2, 5, 22, 18, 49, 759207, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='employe',
            name='dateNaissance',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='employe',
            name='pays',
            field=models.CharField(blank=True, default='Mali', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='employe',
            name='sexe',
            field=models.CharField(choices=[('H', 'HOMME'), ('F', 'FEMME')], max_length=1),
        ),
        migrations.AlterField(
            model_name='employe',
            name='ville',
            field=models.CharField(blank=True, default='Bamako', max_length=50, null=True),
        ),
    ]