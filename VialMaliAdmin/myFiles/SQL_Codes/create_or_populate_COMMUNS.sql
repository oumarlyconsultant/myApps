--creer & populer dimension date
DROP TABLE if exists communs.date_en_dim;

CREATE TABLE communs.date_en_dim
(
  pk              INT NOT NULL,
  date_actual              DATE NOT NULL,
  epoch                    BIGINT NOT NULL,
  day_suffix               VARCHAR(4) NOT NULL,
  day_name                 VARCHAR(9) NOT NULL,
  day_of_week              INT NOT NULL,
  day_of_month             INT NOT NULL,
  day_of_quarter           INT NOT NULL,
  day_of_year              INT NOT NULL,
  week_of_month            INT NOT NULL,
  week_of_year             INT NOT NULL,
  week_of_year_iso         CHAR(10) NOT NULL,
  month_actual             INT NOT NULL,
  month_name               VARCHAR(9) NOT NULL,
  month_name_abbreviated   CHAR(3) NOT NULL,
  quarter_actual           INT NOT NULL,
  quarter_name             VARCHAR(9) NOT NULL,
  year_actual              INT NOT NULL,
  first_day_of_week        DATE NOT NULL,
  last_day_of_week         DATE NOT NULL,
  first_day_of_month       DATE NOT NULL,
  last_day_of_month        DATE NOT NULL,
  first_day_of_quarter     DATE NOT NULL,
  last_day_of_quarter      DATE NOT NULL,
  first_day_of_year        DATE NOT NULL,
  last_day_of_year         DATE NOT NULL,
  mmyyyy                   CHAR(6) NOT NULL,
  mmddyyyy                 CHAR(10) NOT NULL,
  weekend_indr             BOOLEAN NOT NULL
);

ALTER TABLE communs.date_en_dim ADD CONSTRAINT date_en_dim_pk PRIMARY KEY (pk);

CREATE INDEX date_en_dim_date_actual_idx
  ON communs.date_en_dim(date_actual);

COMMIT;

INSERT INTO communs.date_en_dim
SELECT TO_CHAR(datum, 'yyyymmdd')::INT AS pk,
       datum AS date_actual,
       EXTRACT(EPOCH FROM datum) AS epoch,
       TO_CHAR(datum, 'fmDDth') AS day_suffix,
       TO_CHAR(datum, 'TMDay') AS day_name,
       EXTRACT(ISODOW FROM datum) AS day_of_week,
       EXTRACT(DAY FROM datum) AS day_of_month,
       datum - DATE_TRUNC('quarter', datum)::DATE + 1 AS day_of_quarter,
       EXTRACT(DOY FROM datum) AS day_of_year,
       TO_CHAR(datum, 'W')::INT AS week_of_month,
       EXTRACT(WEEK FROM datum) AS week_of_year,
       EXTRACT(ISOYEAR FROM datum) || TO_CHAR(datum, '"-W"IW-') || EXTRACT(ISODOW FROM datum) AS week_of_year_iso,
       EXTRACT(MONTH FROM datum) AS month_actual,
       TO_CHAR(datum, 'TMMonth') AS month_name,
       TO_CHAR(datum, 'Mon') AS month_name_abbreviated,
       EXTRACT(QUARTER FROM datum) AS quarter_actual,
       CASE
           WHEN EXTRACT(QUARTER FROM datum) = 1 THEN 'First'
           WHEN EXTRACT(QUARTER FROM datum) = 2 THEN 'Second'
           WHEN EXTRACT(QUARTER FROM datum) = 3 THEN 'Third'
           WHEN EXTRACT(QUARTER FROM datum) = 4 THEN 'Fourth'
           END AS quarter_name,
       EXTRACT(YEAR FROM datum) AS year_actual,
       datum + (1 - EXTRACT(ISODOW FROM datum))::INT AS first_day_of_week,
       datum + (7 - EXTRACT(ISODOW FROM datum))::INT AS last_day_of_week,
       datum + (1 - EXTRACT(DAY FROM datum))::INT AS first_day_of_month,
       (DATE_TRUNC('MONTH', datum) + INTERVAL '1 MONTH - 1 day')::DATE AS last_day_of_month,
       DATE_TRUNC('quarter', datum)::DATE AS first_day_of_quarter,
       (DATE_TRUNC('quarter', datum) + INTERVAL '3 MONTH - 1 day')::DATE AS last_day_of_quarter,
       TO_DATE(EXTRACT(YEAR FROM datum) || '-01-01', 'YYYY-MM-DD') AS first_day_of_year,
       TO_DATE(EXTRACT(YEAR FROM datum) || '-12-31', 'YYYY-MM-DD') AS last_day_of_year,
       TO_CHAR(datum, 'mmyyyy') AS mmyyyy,
       TO_CHAR(datum, 'mmddyyyy') AS mmddyyyy,
       CASE
           WHEN EXTRACT(ISODOW FROM datum) IN (6, 7) THEN TRUE
           ELSE FALSE
           END AS weekend_indr
FROM (SELECT '1940-01-01'::DATE + SEQUENCE.DAY AS datum
      FROM GENERATE_SERIES(0, 100000) AS SEQUENCE (DAY)
      GROUP BY SEQUENCE.DAY) DQ
ORDER BY 1;

COMMIT;

--creer dimension pays
CREATE TABLE communs.pays_dim (
	pk int4 NOT NULL,
	pays varchar NULL,
	abbrev varchar(3) NOT NULL,
	CONSTRAINT pays_dim_pk PRIMARY KEY (pk)
);

--creer dimension ville
CREATE TABLE communs.ville_dim (
	pk int4 NOT NULL,
	ville varchar NOT NULL,
	lat float8 NULL,
	lon float8 NULL,
	CONSTRAINT ville_dim_pk PRIMARY KEY (pk),
	CONSTRAINT ville_dim_fk FOREIGN KEY (pk) REFERENCES communs.pays_dim(pk) ON DELETE CASCADE
);
ALTER TABLE communs.ville_dim ADD pays_pk int4 NOT NULL;
ALTER TABLE communs.ville_dim DROP CONSTRAINT ville_dim_fk;
ALTER TABLE communs.ville_dim ADD CONSTRAINT ville_dim_fk FOREIGN KEY (pays_pk) REFERENCES communs.pays_dim(pk) ON DELETE CASCADE ON UPDATE CASCADE;


--creer dimension date (fr)


DROP TABLE if exists communs.date_fr_dim;

CREATE TABLE communs.date_fr_dim
(
  pk              INT NOT NULL,
  date_complete              DATE NOT NULL,
--  epoch                    BIGINT NOT NULL,
  jour_suffix               VARCHAR(4) NOT NULL,
  jour_nom                 VARCHAR(9) NOT NULL,
  jour_semaine              INT NOT NULL,
  jour_mois             INT NOT NULL,
  jour_trimestre           INT NOT NULL,
  jour_an              INT NOT NULL,
  semaine_mois            INT NOT NULL,
  semaine_an             INT NOT NULL,
  semaine_an_iso         CHAR(10) NOT NULL,
  mois_complet             INT NOT NULL,
  mois_nom               VARCHAR(9) NOT NULL,
  mois_nom_abrev   CHAR(3) NOT NULL,
  trimestre_complet           INT NOT NULL,
  trimestre_nom             VARCHAR(9) NOT NULL,
  an_complet              INT NOT NULL,
  premier_jour_semaine        DATE NOT NULL,
  dernier_jour_semaine         DATE NOT NULL,
  premier_jour_mois       DATE NOT NULL,
  dernier_jour_mois        DATE NOT NULL,
  premier_jour_trimestre     DATE NOT NULL,
  dernier_jour_trimestre      DATE NOT NULL,
  premier_jour_an        DATE NOT NULL,
  dernier_jour_an         DATE NOT NULL,
  mmaaaa                   CHAR(6) NOT NULL,
  jjmmaaaa                 CHAR(10) NOT NULL,
  indicateur_weekend             BOOLEAN NOT NULL
);

ALTER TABLE communs.date_fr_dim ADD CONSTRAINT date_fr_dim_pk PRIMARY KEY (pk);

CREATE INDEX date_fr_dim_date_complete_idx
  ON communs.date_fr_dim(date_complete);

COMMIT;

INSERT INTO communs.date_fr_dim
SELECT TO_CHAR(datum, 'ddmmyyyy')::INT AS pk,
       datum AS date_complete,
--       EXTRACT(EPOCH FROM datum) AS epoch,
       TO_CHAR(datum, 'fmDDth') AS jour_suffix,
       TO_CHAR(datum, 'TMDay') AS jour_nom,
       EXTRACT(ISODOW FROM datum) AS jour_semaine,
       EXTRACT(DAY FROM datum) AS jour_mois,
       datum - DATE_TRUNC('quarter', datum)::DATE + 1 AS jour_trimestre,
       EXTRACT(DOY FROM datum) AS jour_an,
       TO_CHAR(datum, 'W')::INT AS semaine_mois,
       EXTRACT(WEEK FROM datum) AS semaine_an,
       EXTRACT(ISOYEAR FROM datum) || TO_CHAR(datum, '"-W"IW-') || EXTRACT(ISODOW FROM datum) AS semaine_an_iso,
       EXTRACT(MONTH FROM datum) AS mois_complet,
       TO_CHAR(datum, 'TMMonth') AS mois_nom,
       TO_CHAR(datum, 'Mon') AS mois_nom_abrev,
       EXTRACT(QUARTER FROM datum) AS trimestre_complet,
       CASE
           WHEN EXTRACT(QUARTER FROM datum) = 1 THEN 'Premier'
           WHEN EXTRACT(QUARTER FROM datum) = 2 THEN 'Deuxieme'
           WHEN EXTRACT(QUARTER FROM datum) = 3 THEN 'Troixieme'
           WHEN EXTRACT(QUARTER FROM datum) = 4 THEN 'Quatrieme'
           END AS trimestre_nom,
       EXTRACT(YEAR FROM datum) AS an_complet,
       datum + (1 - EXTRACT(ISODOW FROM datum))::INT AS premier_jour_semaine,
       datum + (7 - EXTRACT(ISODOW FROM datum))::INT AS dernier_jour_semaine,
       datum + (1 - EXTRACT(DAY FROM datum))::INT AS premier_jour_mois,
       (DATE_TRUNC('MONTH', datum) + INTERVAL '1 MONTH - 1 day')::DATE AS dernier_jour_mois,
       DATE_TRUNC('quarter', datum)::DATE AS premier_jour_trimestre,
       (DATE_TRUNC('quarter', datum) + INTERVAL '3 MONTH - 1 day')::DATE AS dernier_jour_trimestre,
       TO_DATE(EXTRACT(YEAR FROM datum) || '-01-01', 'YYYY-MM-DD') AS premier_jour_an,
       TO_DATE(EXTRACT(YEAR FROM datum) || '-12-31', 'YYYY-MM-DD') AS dernier_jour_an,
       TO_CHAR(datum, 'mmyyyy') AS mmaaaa,
       TO_CHAR(datum, 'ddmmyyyy') AS jjmmaaaa,
       CASE
           WHEN EXTRACT(ISODOW FROM datum) IN (6, 7) THEN TRUE
           ELSE FALSE
           END AS indicateur_weekend
FROM (SELECT '1940-01-01'::DATE + SEQUENCE.DAY AS datum
      FROM GENERATE_SERIES(0, 100000) AS SEQUENCE (DAY)
      GROUP BY SEQUENCE.DAY) DQ
ORDER BY 1;

COMMIT;





