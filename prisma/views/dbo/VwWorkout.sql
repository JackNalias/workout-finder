SELECT
  Workout.id AS workoutId,
  title,
  excerpt,
  quill_html,
  [name] AS createdByUserName,
  Workout.fkCreatedByUserId AS createdByUserId,
  COALESCE(x.cnt, 0) AS likes,
  COALESCE(y.cnt, 0) AS dislikes,
  COALESCE(y.cnt, 0) AS comments,
  Workout.lastModifiedOn
FROM
  Workout
  LEFT JOIN [User] ON [User].id = Workout.fkCreatedByUserId
  LEFT JOIN (
    SELECT
      fkWorkoutId,
      count(*) AS cnt
    FROM
      WorkoutLike
    GROUP BY
      fkWorkoutId
  ) AS x ON Workout.id = x.fkWorkoutId
  LEFT JOIN (
    SELECT
      fkWorkoutId,
      count(*) AS cnt
    FROM
      WorkoutDislike
    GROUP BY
      fkWorkoutId
  ) AS y ON Workout.id = y.fkWorkoutId
  LEFT JOIN (
    SELECT
      fkWorkoutId,
      count(*) AS cnt
    FROM
      COMMENT
    GROUP BY
      fkWorkoutId
  ) AS z ON Workout.id = z.fkWorkoutId;