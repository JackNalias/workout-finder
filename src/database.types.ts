export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user: {
        Row: {
          created_at: string
          display_name: string
          id: string
          last_modified_at: string
        }
        Insert: {
          created_at?: string
          display_name: string
          id: string
          last_modified_at?: string
        }
        Update: {
          created_at?: string
          display_name?: string
          id?: string
          last_modified_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      workouts: {
        Row: {
          created_at: string
          excerpt: string
          fk_created_by_user_id: string
          id: number
          last_modified_at: string
          quill_delta_json: Json
          quill_html: string
          quill_plain_text: string
          title: string
        }
        Insert: {
          created_at?: string
          excerpt: string
          fk_created_by_user_id?: string
          id?: number
          last_modified_at?: string
          quill_delta_json: Json
          quill_html: string
          quill_plain_text: string
          title: string
        }
        Update: {
          created_at?: string
          excerpt?: string
          fk_created_by_user_id?: string
          id?: number
          last_modified_at?: string
          quill_delta_json?: Json
          quill_html?: string
          quill_plain_text?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "workouts_fk_created_by_user_id_fkey"
            columns: ["fk_created_by_user_id"]
            referencedRelation: "user"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
