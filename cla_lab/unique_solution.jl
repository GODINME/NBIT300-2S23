using Plots

# CASE I :: Unique Solution (Line Intersection)

# Systems of Linear Equation
# x + y = 4     ------ Equation 1
# 2x -y = -1    ------- Equation 2

# Making y the subject from Equation 1 and 2 to form Equation 3 and 4
# y = 4 - x   ---- Equation 3
# y = 1 + 2x  ---- Equation 4

# Representing it in Julia form

y1(x) = 4 - x 
y2(x) = 1 + 2x

# Finding the unique solution with graph

plot([y1,y2])

# So we can generalized it to n unknown linear equations