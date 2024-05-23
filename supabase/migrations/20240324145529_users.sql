create extension if not exists "moddatetime" with schema "public" version '1.0';

create table "public"."users" (
    "id" uuid not null,
    "email" text not null,
    "full_name" text not null,
    "avatar_url" text,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now()
);


alter table "public"."users" enable row level security;

CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id);

alter table "public"."users" add constraint "users_pkey" PRIMARY KEY using index "users_pkey";

alter table "public"."users" add constraint "users_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."users" validate constraint "users_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
begin
	insert into public.users (id, email, full_name, avatar_url)
	values (new.id, new.email, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
	return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.handle_update_auth_user_metadata()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
declare
	_user_id uuid = coalesce(new.id, old.id);
begin
  update auth.users
  set raw_user_meta_data = jsonb_set(
			raw_user_meta_data,
	    '{full_name}',
	    coalesce(
	      to_jsonb((select full_name from public.users where id = _user_id)),
	      'null'::jsonb
	    )
	  )
  where id = _user_id;
  return null;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.handle_update_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
begin
	update public.users
	set email = new.email,
			full_name = new.raw_user_meta_data->>'full_name',
			avatar_url = new.raw_user_meta_data->>'avatar_url'
	where id = new.id;
	return new;
end;
$function$
;

grant delete on table "public"."users" to "anon";

grant insert on table "public"."users" to "anon";

grant references on table "public"."users" to "anon";

grant select on table "public"."users" to "anon";

grant trigger on table "public"."users" to "anon";

grant truncate on table "public"."users" to "anon";

grant update on table "public"."users" to "anon";

grant delete on table "public"."users" to "authenticated";

grant insert on table "public"."users" to "authenticated";

grant references on table "public"."users" to "authenticated";

grant select on table "public"."users" to "authenticated";

grant trigger on table "public"."users" to "authenticated";

grant truncate on table "public"."users" to "authenticated";

grant update on table "public"."users" to "authenticated";

grant delete on table "public"."users" to "service_role";

grant insert on table "public"."users" to "service_role";

grant references on table "public"."users" to "service_role";

grant select on table "public"."users" to "service_role";

grant trigger on table "public"."users" to "service_role";

grant truncate on table "public"."users" to "service_role";

grant update on table "public"."users" to "service_role";

create policy "Authenticated users can view all users data."
on "public"."users"
as permissive
for select
to authenticated
using (true);


create policy "Users can insert their own data."
on "public"."users"
as permissive
for insert
to public
with check ((auth.uid() = id));


create policy "Users can update their own data."
on "public"."users"
as permissive
for update
to public
using ((auth.uid() = id));


CREATE TRIGGER on_change_user_update_auth_user_metadata AFTER UPDATE ON public.users FOR EACH ROW WHEN ((old.* IS DISTINCT FROM new.*)) EXECUTE FUNCTION handle_update_auth_user_metadata();

CREATE TRIGGER on_change_user_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION moddatetime('updated_at');


