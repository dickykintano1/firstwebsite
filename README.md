# firstwebsite
First website project

User => /api/users (base path -> get all users)
    - Add => /api/user-reg
        - generate user data -> obj -> pass to db
                                        - connect to db, create query insert, insert
    - Update => /api/user-update/{id}
    - Get => /api/user/{id} -> parameter (single)
    - Delete => /api/user-terminate/{id}

Recipe => /api/recipe (base path -> get all recipes)
    - Add => /api/recipe
    - Update => /api/recipe/{id}
    - Get => /api/recipe/{id}
    - Delete => /api/recipe/{id}