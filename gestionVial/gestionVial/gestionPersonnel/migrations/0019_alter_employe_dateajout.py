# Generated by Django 4.1.6 on 2023-02-19 20:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gestionPersonnel', '0018_alter_employe_dateajout'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employe',
            name='dateAjout',
            field=models.DateTimeField(default=datetime.datetime(2023, 2, 19, 20, 1, 42, 149711, tzinfo=datetime.timezone.utc)),
        ),
    ]
