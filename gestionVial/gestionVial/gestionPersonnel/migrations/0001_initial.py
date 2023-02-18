# Generated by Django 4.1.6 on 2023-02-05 22:07

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Employe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('prenom', models.CharField(max_length=200)),
                ('nom', models.TextField()),
                ('dateNaissance', models.DateTimeField()),
                ('sexe', models.CharField(max_length=1)),
                ('adresseDom', models.CharField(blank=True, max_length=100, null=True)),
                ('ville', models.CharField(blank=True, max_length=50, null=True)),
                ('pays', models.CharField(blank=True, max_length=50, null=True)),
                ('dateEmbauche', models.DateTimeField(blank=True, null=True)),
                ('dateAjout', models.DateTimeField(default=datetime.datetime(2023, 2, 5, 22, 7, 31, 603832, tzinfo=datetime.timezone.utc))),
                ('administrateur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]