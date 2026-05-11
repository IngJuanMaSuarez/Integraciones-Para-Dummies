CREATE ROLE sde LOGIN PASSWORD 'geocositas' SUPERUSER;
CREATE ROLE propietario LOGIN PASSWORD 'geocositas';

CREATE SCHEMA propietario AUTHORIZATION propietario;
CREATE SCHEMA sde AUTHORIZATION sde;

GRANT USAGE ON SCHEMA public to propietario;

ALTER TABLE public.nyc_census_blocks OWNER TO propietario;
ALTER TABLE public.nyc_census_blocks SET SCHEMA propietario;