--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: postgis; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;


--
-- Name: EXTENSION postgis; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION postgis IS 'PostGIS geometry, geography, and raster spatial types and functions';


SET search_path = public, pg_catalog;

--
-- Name: upsert_pois_sel_osm_id_set_created_at_a_geom_a_node_t949850915(bigint, character varying, geometry, bigint, bigint, integer, text, character varying, integer); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION upsert_pois_sel_osm_id_set_created_at_a_geom_a_node_t949850915(osm_id_sel bigint, created_at_set character varying, geom_set geometry, node_type_id_set bigint, osm_id_set bigint, status_set integer, tags_set text, updated_at_set character varying, version_set integer) RETURNS void
    LANGUAGE plpgsql
    AS $$
          DECLARE
            first_try INTEGER := 1;
          BEGIN
            LOOP
              -- first try to update the key
              UPDATE "pois" SET "geom" = "geom_set", "node_type_id" = "node_type_id_set", "osm_id" = "osm_id_set", "status" = "status_set", "tags" = "tags_set", "updated_at" = CAST("updated_at_set" AS timestamp without time zone), "version" = "version_set"
                WHERE "osm_id" = "osm_id_sel";
              IF found THEN
                RETURN;
              END IF;
              -- not there, so try to insert the key
              -- if someone else inserts the same key concurrently,
              -- we could get a unique-key failure
              BEGIN
                INSERT INTO "pois"("created_at", "geom", "node_type_id", "osm_id", "status", "tags", "updated_at", "version") VALUES (CAST("created_at_set" AS timestamp without time zone), "geom_set", "node_type_id_set", "osm_id_set", "status_set", "tags_set", CAST("updated_at_set" AS timestamp without time zone), "version_set");
                RETURN;
              EXCEPTION WHEN unique_violation THEN
                -- seamusabshere 9/20/12 only retry once
                IF (first_try = 1) THEN
                  first_try := 0;
                ELSE
                  RETURN;
                END IF;
                -- Do nothing, and loop to try the UPDATE again.
              END;
            END LOOP;
          END;
          $$;


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: active_admin_comments; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE active_admin_comments (
    id bigint NOT NULL,
    resource_id bigint NOT NULL,
    resource_type character varying(255) NOT NULL,
    author_id bigint,
    author_type character varying(255),
    body text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    namespace character varying(255)
);


--
-- Name: active_admin_comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE active_admin_comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: active_admin_comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE active_admin_comments_id_seq OWNED BY active_admin_comments.id;


--
-- Name: admin_users; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE admin_users (
    id bigint NOT NULL,
    email character varying(255) DEFAULT ''::character varying NOT NULL,
    encrypted_password character varying(128) DEFAULT ''::character varying NOT NULL,
    reset_password_token character varying(255),
    reset_password_sent_at timestamp without time zone,
    remember_token character varying(255),
    remember_created_at timestamp without time zone,
    sign_in_count integer DEFAULT 0,
    current_sign_in_at timestamp without time zone,
    last_sign_in_at timestamp without time zone,
    current_sign_in_ip character varying(255),
    last_sign_in_ip character varying(255),
    confirmation_token character varying(255),
    confirmed_at timestamp without time zone,
    confirmation_sent_at timestamp without time zone,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


--
-- Name: admin_users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE admin_users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: admin_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE admin_users_id_seq OWNED BY admin_users.id;


--
-- Name: alternatives; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE alternatives (
    id bigint NOT NULL,
    experiment_id bigint,
    content character varying(255),
    lookup character varying(32),
    weight integer DEFAULT 1,
    participants integer DEFAULT 0,
    conversions integer DEFAULT 0
);


--
-- Name: alternatives_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE alternatives_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: alternatives_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE alternatives_id_seq OWNED BY alternatives.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE categories (
    id bigint NOT NULL,
    identifier character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE categories_id_seq OWNED BY categories.id;


--
-- Name: counters; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE counters (
    id bigint NOT NULL,
    counter_date date,
    tag_website integer DEFAULT 0,
    tag_iphone integer DEFAULT 0,
    tag_android integer DEFAULT 0,
    update_website integer DEFAULT 0,
    update_iphone integer DEFAULT 0,
    update_android integer DEFAULT 0,
    create_website integer DEFAULT 0,
    create_iphone integer DEFAULT 0,
    create_android integer DEFAULT 0,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    search_website integer DEFAULT 0,
    search_iphone integer DEFAULT 0,
    search_android integer DEFAULT 0
);


--
-- Name: counters_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE counters_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: counters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE counters_id_seq OWNED BY counters.id;


--
-- Name: delayed_jobs; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE delayed_jobs (
    id bigint NOT NULL,
    priority integer DEFAULT 0,
    attempts integer DEFAULT 0,
    handler text,
    last_error text,
    run_at timestamp without time zone,
    locked_at timestamp without time zone,
    failed_at timestamp without time zone,
    locked_by character varying(255),
    first_started_at timestamp without time zone,
    last_started_at timestamp without time zone,
    finished_at timestamp without time zone,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    queue character varying(255)
);


--
-- Name: delayed_jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE delayed_jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: delayed_jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE delayed_jobs_id_seq OWNED BY delayed_jobs.id;


--
-- Name: experiments; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE experiments (
    id bigint NOT NULL,
    test_name character varying(255),
    status character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


--
-- Name: experiments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE experiments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: experiments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE experiments_id_seq OWNED BY experiments.id;


--
-- Name: iphone_counters; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE iphone_counters (
    id bigint NOT NULL,
    install_id character varying(255),
    device_version character varying(255),
    app_version character varying(255),
    os_version character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


--
-- Name: iphone_counters_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE iphone_counters_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: iphone_counters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE iphone_counters_id_seq OWNED BY iphone_counters.id;


--
-- Name: node_types; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE node_types (
    id bigint NOT NULL,
    category_id bigint,
    identifier character varying(255),
    osm_key character varying(255),
    osm_value character varying(255),
    icon character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    alt_osm_key character varying(255),
    alt_osm_value character varying(255)
);


--
-- Name: node_types_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE node_types_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: node_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE node_types_id_seq OWNED BY node_types.id;


--
-- Name: photos; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE photos (
    id bigint NOT NULL,
    caption character varying(255),
    image character varying(255),
    image_processing boolean,
    poi_id bigint,
    user_id bigint,
    taken_at timestamp without time zone,
    created_at timestamp without time zone,
    image_width integer,
    image_height integer,
    image_gallery_ipad_retina_width integer,
    image_gallery_ipad_retina_height integer,
    image_thumb_width integer,
    image_thumb_height integer,
    image_thumb_iphone_width integer,
    image_thumb_iphone_height integer,
    image_thumb_iphone_retina_width integer,
    image_thumb_iphone_retina_height integer,
    image_gallery_iphone_width integer,
    image_gallery_iphone_height integer,
    image_gallery_iphone_retina_width integer,
    image_gallery_iphone_retina_height integer,
    image_gallery_ipad_width integer,
    image_gallery_ipad_height integer,
    image_gallery_width integer,
    image_gallery_height integer,
    image_tmp character varying(255)
);


--
-- Name: photos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE photos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE photos_id_seq OWNED BY photos.id;


--
-- Name: pois; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE pois (
    osm_id bigint NOT NULL,
    version integer NOT NULL,
    tags text NOT NULL,
    status integer DEFAULT 8 NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    node_type_id bigint,
    region_id bigint,
    geom geometry(Point) NOT NULL
);


--
-- Name: provided_pois; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE provided_pois (
    id bigint NOT NULL,
    poi_id bigint NOT NULL,
    provider_id bigint NOT NULL,
    wheelchair character varying(255),
    url character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


--
-- Name: provided_pois_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE provided_pois_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: provided_pois_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE provided_pois_id_seq OWNED BY provided_pois.id;


--
-- Name: providers; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE providers (
    id bigint NOT NULL,
    name character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


--
-- Name: providers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE providers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: providers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE providers_id_seq OWNED BY providers.id;


--
-- Name: queued_nodes; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE queued_nodes (
    id bigint NOT NULL,
    user_id integer,
    node_attributes text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    geom geometry(Point)
);


--
-- Name: queued_nodes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE queued_nodes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: queued_nodes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE queued_nodes_id_seq OWNED BY queued_nodes.id;


--
-- Name: regions; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE regions (
    id bigint NOT NULL,
    name character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    parent_id bigint,
    admin_level integer,
    lft integer,
    rgt integer,
    depth integer,
    grenze geometry NOT NULL
);


--
-- Name: regions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE regions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: regions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE regions_id_seq OWNED BY regions.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE schema_migrations (
    version character varying(255) NOT NULL
);


--
-- Name: slugs; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE slugs (
    id bigint NOT NULL,
    name character varying(255),
    sluggable_id bigint,
    sequence integer DEFAULT 1 NOT NULL,
    sluggable_type character varying(40),
    scope character varying(255),
    created_at timestamp without time zone
);


--
-- Name: slugs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE slugs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: slugs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE slugs_id_seq OWNED BY slugs.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE users (
    id bigint NOT NULL,
    oauth_token character varying(255),
    oauth_secret character varying(255),
    email character varying(255),
    encrypted_password character varying(255),
    password_salt character varying(255) DEFAULT ''::character varying NOT NULL,
    remember_token character varying(255),
    remember_created_at timestamp without time zone,
    sign_in_count integer DEFAULT 0,
    current_sign_in_at timestamp without time zone,
    last_sign_in_at timestamp without time zone,
    current_sign_in_ip character varying(255),
    last_sign_in_ip character varying(255),
    changeset_id bigint,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    authentication_token character varying(255),
    wants_newsletter boolean DEFAULT false NOT NULL,
    confirmation_token character varying(255),
    confirmed_at timestamp without time zone,
    confirmation_sent_at timestamp without time zone,
    osm_id bigint,
    first_name character varying(255),
    last_name character varying(255),
    create_counter integer DEFAULT 0 NOT NULL,
    edit_counter integer DEFAULT 0 NOT NULL,
    osm_username character varying(255),
    tag_counter integer DEFAULT 0 NOT NULL,
    photos_count integer DEFAULT 0 NOT NULL,
    terms boolean DEFAULT false NOT NULL,
    accepted_at timestamp without time zone,
    privacy_policy boolean DEFAULT false NOT NULL,
    privacy_policy_accepted_at timestamp without time zone,
    reset_password_token character varying(255),
    reset_password_sent_at timestamp without time zone
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY active_admin_comments ALTER COLUMN id SET DEFAULT nextval('active_admin_comments_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY admin_users ALTER COLUMN id SET DEFAULT nextval('admin_users_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY alternatives ALTER COLUMN id SET DEFAULT nextval('alternatives_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY categories ALTER COLUMN id SET DEFAULT nextval('categories_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY counters ALTER COLUMN id SET DEFAULT nextval('counters_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY delayed_jobs ALTER COLUMN id SET DEFAULT nextval('delayed_jobs_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY experiments ALTER COLUMN id SET DEFAULT nextval('experiments_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY iphone_counters ALTER COLUMN id SET DEFAULT nextval('iphone_counters_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY node_types ALTER COLUMN id SET DEFAULT nextval('node_types_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY photos ALTER COLUMN id SET DEFAULT nextval('photos_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY provided_pois ALTER COLUMN id SET DEFAULT nextval('provided_pois_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY providers ALTER COLUMN id SET DEFAULT nextval('providers_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY queued_nodes ALTER COLUMN id SET DEFAULT nextval('queued_nodes_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY regions ALTER COLUMN id SET DEFAULT nextval('regions_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY slugs ALTER COLUMN id SET DEFAULT nextval('slugs_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: spatial_ref_sys; Type: TABLE DATA; Schema: public; Owner: -
--

COPY spatial_ref_sys (srid, auth_name, auth_srid, srtext, proj4text) FROM stdin;
\.


--
-- Name: active_admin_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY active_admin_comments
    ADD CONSTRAINT active_admin_comments_pkey PRIMARY KEY (id);


--
-- Name: admin_users_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY admin_users
    ADD CONSTRAINT admin_users_pkey PRIMARY KEY (id);


--
-- Name: alternatives_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY alternatives
    ADD CONSTRAINT alternatives_pkey PRIMARY KEY (id);


--
-- Name: categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: counters_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY counters
    ADD CONSTRAINT counters_pkey PRIMARY KEY (id);


--
-- Name: delayed_jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY delayed_jobs
    ADD CONSTRAINT delayed_jobs_pkey PRIMARY KEY (id);


--
-- Name: experiments_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY experiments
    ADD CONSTRAINT experiments_pkey PRIMARY KEY (id);


--
-- Name: iphone_counters_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY iphone_counters
    ADD CONSTRAINT iphone_counters_pkey PRIMARY KEY (id);


--
-- Name: node_types_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY node_types
    ADD CONSTRAINT node_types_pkey PRIMARY KEY (id);


--
-- Name: photos_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- Name: provided_pois_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY provided_pois
    ADD CONSTRAINT provided_pois_pkey PRIMARY KEY (id);


--
-- Name: providers_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY providers
    ADD CONSTRAINT providers_pkey PRIMARY KEY (id);


--
-- Name: queued_nodes_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY queued_nodes
    ADD CONSTRAINT queued_nodes_pkey PRIMARY KEY (id);


--
-- Name: regions_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY regions
    ADD CONSTRAINT regions_pkey PRIMARY KEY (id);


--
-- Name: slugs_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY slugs
    ADD CONSTRAINT slugs_pkey PRIMARY KEY (id);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: delayed_jobs_priority; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX delayed_jobs_priority ON delayed_jobs USING btree (priority, run_at);


--
-- Name: index_active_admin_comments_on_author_type_and_author_id; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_active_admin_comments_on_author_type_and_author_id ON active_admin_comments USING btree (author_type, author_id);


--
-- Name: index_active_admin_comments_on_namespace; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_active_admin_comments_on_namespace ON active_admin_comments USING btree (namespace);


--
-- Name: index_admin_notes_on_resource_type_and_resource_id; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_admin_notes_on_resource_type_and_resource_id ON active_admin_comments USING btree (resource_type, resource_id);


--
-- Name: index_admin_users_on_confirmation_token; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE UNIQUE INDEX index_admin_users_on_confirmation_token ON admin_users USING btree (confirmation_token);


--
-- Name: index_admin_users_on_email; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE UNIQUE INDEX index_admin_users_on_email ON admin_users USING btree (email);


--
-- Name: index_admin_users_on_reset_password_token; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE UNIQUE INDEX index_admin_users_on_reset_password_token ON admin_users USING btree (reset_password_token);


--
-- Name: index_alternatives_on_experiment_id; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_alternatives_on_experiment_id ON alternatives USING btree (experiment_id);


--
-- Name: index_alternatives_on_lookup; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_alternatives_on_lookup ON alternatives USING btree (lookup);


--
-- Name: index_experiments_on_test_name; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_experiments_on_test_name ON experiments USING btree (test_name);


--
-- Name: index_node_types_on_id_and_category_id; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_node_types_on_id_and_category_id ON node_types USING btree (id, category_id);


--
-- Name: index_node_types_on_osm_key_and_osm_value; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_node_types_on_osm_key_and_osm_value ON node_types USING btree (osm_key, osm_value);


--
-- Name: index_pois_on_geom; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_pois_on_geom ON pois USING gist (geom);


--
-- Name: index_pois_on_node_type_id_and_osm_id; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_pois_on_node_type_id_and_osm_id ON pois USING btree (node_type_id, osm_id);


--
-- Name: index_pois_on_osm_id; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE UNIQUE INDEX index_pois_on_osm_id ON pois USING btree (osm_id);


--
-- Name: index_pois_on_region_id; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_pois_on_region_id ON pois USING btree (region_id);


--
-- Name: index_pois_on_status; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_pois_on_status ON pois USING btree (status);


--
-- Name: index_pois_on_tags; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_pois_on_tags ON pois USING btree (tags);


--
-- Name: index_provided_pois_on_provider_id_and_poi_id; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE UNIQUE INDEX index_provided_pois_on_provider_id_and_poi_id ON provided_pois USING btree (provider_id, poi_id);


--
-- Name: index_queued_nodes_on_geom; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_queued_nodes_on_geom ON queued_nodes USING gist (geom);


--
-- Name: index_slugs_on_n_s_s_and_s; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE UNIQUE INDEX index_slugs_on_n_s_s_and_s ON slugs USING btree (name, sluggable_type, sequence, scope);


--
-- Name: index_slugs_on_sluggable_id; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_slugs_on_sluggable_id ON slugs USING btree (sluggable_id);


--
-- Name: index_users_on_authentication_token; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE UNIQUE INDEX index_users_on_authentication_token ON users USING btree (authentication_token);


--
-- Name: index_users_on_oauth_token; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_users_on_oauth_token ON users USING btree (oauth_token);


--
-- Name: index_users_on_wants_newsletter; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX index_users_on_wants_newsletter ON users USING btree (wants_newsletter);


--
-- Name: unique_schema_migrations; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE UNIQUE INDEX unique_schema_migrations ON schema_migrations USING btree (version);


--
-- Name: geometry_columns_delete; Type: RULE; Schema: public; Owner: -
--

CREATE RULE geometry_columns_delete AS ON DELETE TO geometry_columns DO INSTEAD NOTHING;


--
-- Name: geometry_columns_insert; Type: RULE; Schema: public; Owner: -
--

CREATE RULE geometry_columns_insert AS ON INSERT TO geometry_columns DO INSTEAD NOTHING;


--
-- Name: geometry_columns_update; Type: RULE; Schema: public; Owner: -
--

CREATE RULE geometry_columns_update AS ON UPDATE TO geometry_columns DO INSTEAD NOTHING;


--
-- PostgreSQL database dump complete
--

INSERT INTO schema_migrations (version) VALUES ('20130228153529');

INSERT INTO schema_migrations (version) VALUES ('20130625150954');