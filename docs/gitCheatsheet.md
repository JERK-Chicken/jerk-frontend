# Git Branch Cheatsheet

## Viewing a Branch

##### Only local branches:
`git branch`

##### Local and remote branches:
`git branch -a`

## Make a new branch

Navigate to the gitlab web API, select the "+" dropdown menu, select "new branch", and specify the name and origin branch (usually Dev)

## Move to new branch

`git checkout [branch]`

## Merge a branch

As an example, suppose we want to merge the home_page feature onto the Dev branch:

1. Navigate to the Dev branch using a checkout command
2. `git merge home_page`
3. If finished working on the branch, delete

## Deleting branches

##### Deleting local branches:
`git branch -d [branch]`

##### Deleting remote branches:
`git push origin --delete [branch]`

