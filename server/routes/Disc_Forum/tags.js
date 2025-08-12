const express = require('express');
const router = express.Router();
const Question = require('../../models/Disc_Forum/Question');

// GET /api/v1/forum/tags
router.get('/tags', async (req, res) => {
  try {
    const questions = await Question.find({}, 'tags'); // Get only 'tags' field from all questions

    // Flatten all tag arrays into a single array
    const allTags = questions
      .map(q => q.tags)  // Extract each question's tags array
      .flat()            // Flatten into a single array
      .filter(Boolean);  // Remove null/undefined

    // Remove duplicates and trim empty tags
    const uniqueTags = [...new Set(allTags)].filter(tag => tag.trim().length > 0);

    console.log('✅ Final unique tags sent:', uniqueTags);
    res.status(200).json(uniqueTags);
  } catch (error) {
    console.error('❌ Error fetching tags:', error);
    res.status(500).json({ message: 'Error fetching tags', error: error.message });
  }
});

module.exports = router;
