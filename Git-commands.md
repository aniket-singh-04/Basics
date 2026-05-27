1️⃣ Basic Git Workflow to Sync Local and Remote
# 1. Commit your local changes
git add .
git commit -m "My local changes"

# 2. Fetch remote changes
git fetch origin



| Command                 | What it fetches                      | Use case                              |
| ----------------------- | ------------------------------------ | ------------------------------------- |
| `git fetch origin`      | All branches from `origin`           | Good for syncing everything           |
| `git fetch origin main` | Only the `main` branch from `origin` | Faster, when you only care about main |





git fetch origin main

What it does: Downloads the latest commits from the remote main branch (origin/main) but does not change your local branch.
Updates your remote-tracking branch origin/main.
Safe: Your local work is untouched.

Example:
# Fetch only the remote main branch
git fetch origin main


After this:
Local main:   A---B
Remote main:  A---B---C  (origin/main)


Your local main still ends at B.
You need to merge or rebase to bring in C:


after fetch follow bellow one of command 

git merge origin/main   // opposite --->   git merge --abort
# OR 
git rebase origin/main    // agar ye karte hai to rebse wali command chagengi 
oppotie command is --->  git rebase --abort






git pull origin main    or    git pull origin main --allow-unrelated-histories (Merge them anyway) 
for git pull reset --->   git reset --hard ORIG_HEAD

What it does: Combines fetch + merge in one step.
Downloads the remote main branch and immediately tries to merge it into your local branch.
Can cause conflicts immediately, because it modifies your local branch right away.

Example:
# Pull remote main and merge into local main
git pull origin main


After this:
Local main:   A---B---C (merge commit if needed)

You may need to resolve conflicts immediately.

| Command                 | Fetches | Changes Local Branch? | Conflicts Possible? | Use Case                            |
| ----------------------- | ------- | --------------------- | ------------------- | ----------------------------------- |
| `git fetch origin main` | Yes     | No                    | No                  | Safe, review changes before merging |
| `git pull origin main`  | Yes     | Yes (merge)           | Yes                 | Quick update of local branch        |









Note: 
| Situation                                                    | Action                                                    |
| ------------------------------------------------------------ | --------------------------------------------------------- |
| You have **pulled remote changes using `git pull`**          | Just resolve conflicts (if any) and push                  |
| You have **local commits not pushed yet** and haven’t pulled | Use `git fetch` + `merge` or `rebase` manually            |
| You want **clean, linear history for your local commits**    | Use `git fetch` + `git rebase origin/main` before pushing |









# 3. Merge or rebase remote changes into local branch
git merge origin/main    # OR git rebase origin/main

# 4. Resolve conflicts if any
git add <file>           # mark conflicts resolved
git commit               # for merge
git rebase --continue    # for rebase

# 5. Push local changes to remote
git push origin main

Fetch Overview
Command	                  What it fetches	                Use case
git fetch origin	        All branches from origin	      Good for syncing everything
git fetch origin main       Only the main branch from origi       Faster, if you only care about main

git fetch updates remote-tracking branches like origin/main but does not change your local branch.




2️⃣ Conflict Resolution

# My Project
This is my local version.


The remote README.md has this content:

# My Project
This is the remote version.


You run:
git pull origin main


Git cannot automatically merge the changes because both changed the same line. You’ll see:
<<<<<<< HEAD
This is my local version.
=======
This is the remote version.
>>>>>>> origin/main

Understand the markers
<<<<<<< HEAD → your local changes
======= → separates local vs remote
>>>>>>> origin/main → remote changes

Git is basically asking:
“Which version do you want to keep?”

Step 2: Decide what to keep
You have 3 options:

1> Keep your local version only
This is my local version.


2> Keep remote version only
This is the remote version.


3> Combine both versions
This is my local version.
This is the remote version.




Options to Resolve Conflicts
Option 1: Keep your local version only (discard remote)
git checkout --ours README.md
git add README.md
git commit -m "Keep local version of README.md"
git push origin main


--ours → keeps your local version
git add → marks as resolved
git commit → finalizes the merge
git push → updates remote with your local version




Option 2: Keep remote version only (discard local)
git checkout --theirs README.md
git add README.md
git commit -m "Use remote version of README.md"
git push origin main


--theirs → keeps the remote version
Local changes are discarded




Option 3: Keep both (merge manually)

Edit the file to combine both versions:

This is my local version.
This is the remote version.


Remove all conflict markers (<<<<<<<, =======, >>>>>>>)

Then run:
git add README.md
git commit -m "Merge local and remote changes in README.md"
git push origin main


Result: Both changes are now in the remote branch

Tips after resolving conflicts
Always remove the conflict markers before committing.
After resolving, your branch is safe, and you can continue working normally.









3️⃣ Git Merge vs Git Rebase
Git Merge
git merge origin/main


Combines remote branch into your local branch
Creates a merge commit if both branches have commits
History is non-linear

Example:

Remote: A---B---C
Local:      D---E
After merge:
          M  (merge commit)
         / \
A---B---C   D---E


Pros:
Safe, preserves history
Easy for beginners

Cons:
History can get cluttered


Git Rebase
git rebase origin/main


Moves your local commits on top of remote commits
No merge commit is created
History becomes linear

Example:

Remote: A---B---C
Local:      D---E
After rebase:
A---B---C---D'---E'


D' and E' are your local commits replayed on top of C

Pros:
Clean, linear history
Easier to read

Cons:
Rewrites commits (new commit IDs)

Can be tricky if there are conflicts

Key Differences
Feature             Merge	                              Rebase
History        	Non-linear (merge commit)          	Linear (no merge commit)
Commits	          Preserves original commits	          Rewrites local commits
Conflicts           Resolve once during merge         	May need multiple resolutions
Ideal use	          Safe, teamwork	                    Clean history, private commits






Adding more commands

(git merger file name) this is used for the merge a branch , branch merger in that branch you present
(git branch -M new branch) this is used for changing their exisiting branch name
(git branch -u origin brnch name) this is used for the push commits
(git reset --hard commit id(give commit id where you go ) ) for delete a commit 
(git reset --soft commit id(give commit id where you go))for delete only commit id but staged and code me rahega
(git reset commit id )for delet commit id and staged se delete hoga but code me rahega and also going at that commit
(git clone copied url name )this is used for clone repositery in aur system
(git fetch) for taking other contributer commit 
(git merge origin/main branch name) this is used for changing originally in their code by the merging
(git pull) is used for fetching and mergingh       
(git reflog) is used for getting all commit id 
(git checkout head commit id )it is used for going that peritcular commit id by the head
(git checkout head~1,0...) is aslo used
(git checkout main) for point the main 
(git revert commit id or head~0,1,.. of git revert head~3..head(it is used for range delete from head 0 
to 2 and it create diff. id's))this is used for reset github code at that id 
(git revert --no-commit head~3..) it is used for only one commit id in range reset github commits
(git revert --abort) for stop this revert
(git revert --continue) for continue this revert
if two changes happens one changes from contrubuter and other your  changes then if you pull code then 
conflict create then conflict create then resolve ki kaun sa code rukhana hai then commit and push 
ye conflict branches ke bich me bhi ho sakta hai agar dono branches me same file and line pe changes
 kiya gaya ho to and usko merge kiya jai to 
(git stash -m "message ")for stash measn not commit but half changes go in stash list 
(git stash apply index ) for applying the stach code 
(git stash drop index) used for clear stash or (git stash clear ) for clear all stash
(git cherry-pick commit id ) used for merging or changing perticular commit
(git rm --cached file name ) this is used for removing the file(who is previously tracked) from tracking git 
(git rm --cached -r folder name) this if for folder
and them add and commit for above 2 line code runing
(git commit -am "message")This is used for commit without manual staging
(git chekout commit id or git checkout cmmit id and file name)it is used for reach at that commit id rather 
then deleted or not deleted that commit 
(git config --global -e) it is used for open file of git where we change the email and userName
(git switch branch Name) it is used for switching the branch 
(git switch -C branch Name) it is used for creating new branch an also switch
(git revert commit id -m1) is is used for revert the merger and -m1 is write for going at that place


Terminal and Git commands

(q): Exit commands like git log and return to the terminal.
(history -c): Clear command history in Git Bash or Linux.
(Ctrl + Shift + T): Reopen a previously closed terminal tab.
(pwd): Show the current working directory path.
(mkdir <folder_name>): Create a new directory (e.g., mkdir aniekt ).
(touch <file_name>): Create a new file (e.g., touch file. txt ).


Git Basics

(git init): Initialize a new Git repository.
(git add <file_name>): Stage a specific file for commit. Use git (add .) to stage all.
(git restore --staged <file_name>): Unstage a file.
(git status): Check the status of staged and unstaged files. Use git (status -s) for a shortcut.
(git commit -m "message"): Commit changes with a message.
(git checkout <commit_id>): Checkout to a specific commit ID.
(git log): View the commit history.
if we checking the git log then use (q) for the going the normal terminal
(git log --all): View commit history across all branches.
(git log --all --oneline): for used to seen all comit in shortcut
(git log --oneline --graph): View a compact graphical commit history.
(git branch <branch_name>): Create a new branch.
(git branch): List all branches.
(git checkout <branch_name>): Switch to a specific branch.
(git branch --delete <branch_Name>) for delteting branch when we can not changes apply in that branch
(git branch -D <branch_name>): Force delete a branch. or any condition delete
(git merge <branch_name>): Merge a branch into the current branch.



Branch Operations

(git branch -M <new_branch_name>): Rename the current branch.
(git branch -u origin <branch_name>): Set the upstream branch for push.
(git reset --hard <commit_id>): Reset the repo to a specific commit (loses changes).
(git reset --soft <commit_id>): Reset commit but keep staged changes.
(git reset <commit_id>): Reset commit and unstage changes, but keep them in the working directory.
(git clone <repo_url>): Clone a remote repository.
(git fetch): Fetch changes from a remote repository.
(git pull): Fetch and merge changes from a remote repository.
(git reflog): View the history of commits, including commit IDs.
(git checkout HEAD <commit_id>): Checkout to a specific commit using HEAD.
(git revert <commit_id>): Create a new commit that undoes a specific commit.
(git revert --no-commit <commit_id>): Revert a commit without auto-committing.
(git revert --abort): Abort a revert operation.
(git revert --continue): Continue after resolving a revert conflict.




Stashing & Conflict Resolution

(git stash -m "message"): Stash uncommitted changes.
(git stash apply <stash_index>): Apply a specific stash.
(git stash drop <stash_index>): Remove a specific stash. Use git stash clear to remove all.
(git cherry-pick <commit_id>): Apply a specific commit from another branch.
(git rm --cached <file_name>): Untrack a file (remove from Git index).
(git commit -am "message"): Commit all changes without manually staging files.
(git config --global -e): Edit Git configuration (e.g., set username/email).
(git switch <branch_name>): Switch to an existing branch.
(git switch -C <branch_name>): Create and switch to a new branch.
(git revert -m 1 <commit_id>): Revert a merge commit (keep the first parent).



