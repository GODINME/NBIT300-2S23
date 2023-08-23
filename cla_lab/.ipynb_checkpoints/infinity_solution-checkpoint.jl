using Plots

# CASE III :: Infinite Number of Solution (On the Same Line)

# Systems of Linear Equation
# x - y = 1     ------ Equation 1
# 2x - 2y = 2    ------- Equation 2

# Making y the subject from Equation 1 and 2 to form Equation 3 and 4
# y = x - 1   ---- Equation 3
# y = x - 1  ---- Equation 4

# Representing it in Julia form

y1(x) = x - 1 
y2(x) = x - 1

# Finding the infinite solution with graph

plot([y1,y2])

# So we can generalized it to n unknown linear equations