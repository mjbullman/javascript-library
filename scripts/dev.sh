#! /usr/bin/env bash

cd "${HOME}/Development/JavascriptProjects/javascript-library/" || exit

SESSION="js-lib-dev"

tmux has-session -t $SESSION 2>/dev/null

if [ $? != 0 ]; then
    # Create Neovim windoe.
    tmux new-session -d -s $SESSION -n editor "nvim"

    # Create Claude AI window.
    tmux new-window -t $SESSION -n claude "claude"

    # Create Lazygit window.
    tmux new-window -t $SESSION -n lazygit "lazygit"

    # Create Vite tests window.
    tmux new-window -t $SESSION -n test "npm run test"

    # Create third window for linting
    # tmux new-window -t $SESSION -n lint "npm run lint:watch"

    # Optional: go back to editor window
    tmux select-window -t $SESSION:1
fi

# Attach to session
tmux attach -t $SESSION

