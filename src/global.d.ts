/// <reference types="@sveltejs/kit" />

type Todo = {
    uid: string;
    created_at: Date;
    content: string;
    done: boolean; 
  }