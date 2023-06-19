import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUsers1687201331481 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    CREATE TABLE IF NOT EXISTS public."user"
    (
      id integer NOT NULL,
      name character varying NOT NULL,
      email character varying NOT NULL,
      password character varying NOT NULL,
      cpf character varying NOT NULL,
      phone character varying NOT NULL,
      type_user int NOT NULL,
      created_at timestamp without time zone DEFAULT now() NOT NULL,
      updated_at timestamp without time zone DEFAULT now() NOT NULL,
      CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id)
    );

    CREATE SEQUENCE public.user_id_seq 
      as integer 
      START WITH 1 
      INCREMENT BY 1
      NO MINVALUE 
      NO MAXVALUE
      CACHE 1;
        
    ALTER SEQUENCE public.user_id_seq OWNED BY public.user.id;

    ALTER TABLE public.user ALTER COLUMN id SET DEFAULT nextval('user_id_seq'::regclass);`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        drop table public.users;
    `);
  }
}
